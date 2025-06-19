  "use client";
  import { useState } from "react";
  import axios from "axios";

  export interface Profile {
    username: string;
    full_name: string;
    biography: string;
    profile_pic_url: string;
    follower_count: number;
    following_count: number;
    media_count: number;
    is_private: boolean;
    account_type: number,
    category: string,
  }

  export function useDetails() {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getDetails = async (username: string) => {
      setLoading(true);
      setError(null);
      setProfile(null);

      try {
        const response = await axios.get(
          "https://instagram-social-api.p.rapidapi.com/v1/info",
          {
            params: { username_or_id_or_url: username },
            headers: {
              "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
              "x-rapidapi-host": "instagram-social-api.p.rapidapi.com",
            },
          }
        );

        const data = response.data?.data;

        if (!data?.username) {
          throw new Error("Invalid username or account is private.");
        }

        const cleanProfile: Profile = {
          username: data.username,
          full_name: data.full_name,
          biography: data.biography,
          profile_pic_url: data.profile_pic_url_hd,
          follower_count: data.follower_count,
          following_count: data.following_count,
          media_count: data.media_count,
          is_private: data.is_private,
          account_type: data.account_type,
          category: data.category,
        };

        setProfile(cleanProfile);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    return { loading, profile, error, getDetails };
  }
