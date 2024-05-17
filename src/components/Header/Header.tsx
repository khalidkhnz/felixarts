"use client";
import React from "react";
import { Button } from "../ui/button";
import { useAppContext } from "@/context/AppContext";
import { googleAuthAction, signoutAction } from "@/actions/auth.action";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const { auth, setAuth } = useAppContext();

  async function handleAuth() {
    if (auth?.name) {
      await signoutAction();
      setAuth({});
    } else {
      await googleAuthAction();
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Link className="mr-6" href="/">
          <h1>FelixArts</h1>
        </Link>
        <div className="ml-auto flex gap-2">
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="#"
          >
            Home
          </Link>

          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="#"
          >
            Portfolio
          </Link>

          <Button
            onClick={handleAuth}
            className="justify-self-end px-2 py-1 text-xs"
          >
            {auth?.name ? "Sign out" : "Sign in"}
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
