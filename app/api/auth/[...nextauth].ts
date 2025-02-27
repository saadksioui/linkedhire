import NextAuth from "next-auth"
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = {
  providers: [
    LinkedInProvider(
      {
        clientId: process.env.LINKEDIN_CLIENT_ID as string,
        clientSecret: process.env.LINKEDIN_SECRET as string,
      }
    )
  ]
}

export default NextAuth(authOptions)