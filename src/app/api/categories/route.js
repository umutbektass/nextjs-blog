import prisma from "@/app/utils/connect"
import { NextResponse } from "next/server"

export const GET = async ()=>{
    try {
        const categories = await prisma.Category.findMany();
        return  NextResponse.json(categories,{status:200})
    } catch (error) {
        console.log(error)
        return  NextResponse.json({message:"Something went wrong!"},{status:500})
    }
}