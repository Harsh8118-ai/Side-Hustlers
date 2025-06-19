"use client";
import { useEffect } from "react";

export const useVisitorLogger = () => {
    useEffect(() => {
        const username = localStorage.getItem("visitor_username");
        if (!username) return;
        
        const sessionId = localStorage.getItem("session_id") || crypto.randomUUID();
        localStorage.setItem("session_id", sessionId);
        const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

        const entryTime = Date.now();
        const screen = `${window.screen.width}x${window.screen.height}`;
        const language = navigator.language;
        const referrer = document.referrer;
        const pages = [window.location.pathname];
        const user_agent = navigator.userAgent;


        const payload = {
            username,
            screen,
            language,
            referrer,
            session_id: sessionId,
            pages,
            entry_time: new Date(entryTime).toISOString(),
            user_agent,
        };

        const sendExitData = () => {
            const exitTime = Date.now();
            const duration = Math.floor((exitTime - entryTime) / 1000);

            fetch(`${BACKEND_URL}/api/instagram/visitor`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...payload,
                    exit_time: new Date(exitTime).toISOString(),
                    duration_seconds: duration,
                }),
                keepalive: true,
            });
        };

        window.addEventListener("beforeunload", sendExitData);
        return () => window.removeEventListener("beforeunload", sendExitData);
    }, []);
};
