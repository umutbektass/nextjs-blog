import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '@/app/utils/connect'
import { getServerSession } from "next-auth"

export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    
}

export const getAuthSession = ()=> getServerSession(authOptions)