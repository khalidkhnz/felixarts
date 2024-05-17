"use client";

import { useAppContext } from "@/context/AppContext";
import { getMethod } from "@/lib/customApiInterceptor";
import React, { useEffect, useRef } from "react";

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const { auth, setAuth } = useAppContext();

  const isRendered = useRef(false);

  useEffect(() => {
    if (isRendered.current) return;
    async function fetchSession() {
      const session = await getMethod("/api/current-session");

      if (session?.session?.user) {
        setAuth(session?.session?.user);
      } else {
        setAuth({});
      }
    }
    fetchSession();
    isRendered.current = true;
  }, []);

  return <>{children}</>;
};
