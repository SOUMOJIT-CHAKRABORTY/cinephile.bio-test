import dbConnect from "@/dbConnect/dbConnect";
import User from "@/modals/User";
import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/MongoDBAdapter";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    name: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  callbacks: {
    jwt: async ({ token, account, trigger, session }) => {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      if (account?.accessToken) {
        dbConnect();
        const db_user = await User.findOne({ email: account.email });
        if (db_user) {
          token.id = db_user.id;
          token.username = db_user.username;
          token.name = db_user.name;
          token.email = db_user.email;
          token.image = db_user.image;
        }
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user!.id = token.id;
        session.user!.username = token.username;
        session.user!.name = token.name ?? null;
        session.user!.email = token.email ?? null;
        session.user!.image = token.image ?? null;
      }
      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      return url.startsWith(baseUrl) ? url : `${baseUrl}/dashboard`;
    },
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  debug: process.env.NODE_ENV === "development",
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
