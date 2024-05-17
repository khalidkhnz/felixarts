"use server";

import { auth, signIn, signOut } from "@/auth";

export async function googleAuthAction() {
  await signIn("google");
}

export async function signoutAction() {
  await signOut();
}
