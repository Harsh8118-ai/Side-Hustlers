// hooks/useVisitorLogger.ts
"use client";
import { useCallback } from "react";

export const useVisitorLogger = () => {
  const logVisitor = useCallback(() => {
    const username = localStorage.getItem("username");
    if (!username) return;

    const sessionId = localStorage.getItem("session_id") || crypto.randomUUID();
    localStorage.setItem("session_id", sessionId);
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

    const entry_time = new Date().toISOString();
    const screen = `${window.screen.width}x${window.screen.height}`;
    const language = navigator.language;
    const referrer = document.referrer;
    const user_agent = navigator.userAgent;

    const payload = {
      username,
      screen,
      language,
      referrer,
      session_id: sessionId,
      pages: ["/"],
      entry_time,
      user_agent,
    };

    fetch(`${BACKEND_URL}/api/instagram/visitor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(console.error);
  }, []);

  return { logVisitor };
};
