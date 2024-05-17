"use client";
import { useAppContext } from "@/context/AppContext";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const { auth, setAuth } = useAppContext();

  return (
    <div>
      <div>
        <h1 className="font-bold">Session</h1>
        {JSON.stringify(auth)}
      </div>
    </div>
  );
};

export default page;
