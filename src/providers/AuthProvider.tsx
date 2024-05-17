"use client";

import React, { useEffect, useRef } from "react";

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const isRendered = useRef(false);

  useEffect(() => {
    if (isRendered.current) return;
    async function fetchSession() {}
    fetchSession();
    isRendered.current = true;
  }, []);

  return <>{children}</>;
};
