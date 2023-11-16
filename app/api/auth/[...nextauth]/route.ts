import prisma from "@/lib/prisma";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { AuthOptions } from "next-auth";
import { PrismaAdapter } from '@auth/prisma-adapter'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.SECRET as string,
    pages: {
        signIn: '/sign-in',

    },

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
