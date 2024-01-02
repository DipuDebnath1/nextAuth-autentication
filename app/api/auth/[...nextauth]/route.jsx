import User from "@/models/User";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";


(async()=>{ 
  const users  = await User.findAll()
  console.log('users ', users); 
})()


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId:'090c33a823cb4604e251',
      clientSecret:'146af0c628f918f2eb9fdb35349ddd335ddfd60d',
    }),
    GoogleProvider({
      clientId:'192365849222-4uv14i0h4rksapopdqvpnqelo75nhlcf.apps.googleusercontent.com',
      clientSecret:'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',
      // clientId:'43067988628-5rnlbnk0d975l6kpluduo5a3bjpo4go8.apps.googleusercontent.com',     -------nirob-----
      // clientSecret:'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',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }},
    }),
    // ...add more providers here
  ],
  
} 

export const handler =  NextAuth(authOptions)

export {handler as GET, handler as POST}
