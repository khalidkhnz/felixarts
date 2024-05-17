import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Apple from "next-auth/providers/apple";
import { Config } from "./lib/config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        type: {},
        auth: {},
      },
      authorize: async (credentials: any) => {
        let user: any = {};

        return user as any;
      },
    }),
    Google({
      clientId: Config.AUTH_GOOGLE_ID,
      clientSecret: Config.AUTH_GOOGLE_SECRET,
    }),
    Facebook({
      clientId: Config.AUTH_FACEBOOK_ID,
      clientSecret: Config.AUTH_FACEBOOK_SECRET,
    }),
    Apple({
      clientId: Config.AUTH_APPLE_ID,
      clientSecret: Config.AUTH_APPLE_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        // User is available during sign-in

        // FOR OAUTH
        if (!user.type) {
          token = user;
          token.type = "oauth";
          return token;
        }
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // FOR OAUTH
      session.user = token;

      return session;
    },
  },
});
