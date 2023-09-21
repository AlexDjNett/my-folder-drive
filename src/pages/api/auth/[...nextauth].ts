import NextAuth from "next-auth";
import GithubProvider from "next-auth";
import { Provider } from "next-auth/providers";

import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";

interface GithubProviderOptions {
  clientId: string;
  clientSecret: string;
  // Додайте інші властивості, які вимагає GithubProvider
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider(<GithubProviderOptions>{
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
