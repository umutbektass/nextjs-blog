import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function GET(req){
    const {searchParams} = new URL(req.url)
    const page = searchParams.get("page") || 1

    const POST_PER_PAGE=2;

  try {
    const posts = await prisma.post.findMany({
        take:POST_PER_PAGE,skip:((page-1)*POST_PER_PAGE)
    })

   return NextResponse.json(JSON.stringify(posts),{status:200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({messages:"Something went wrong!"},{status:500})
  }
}