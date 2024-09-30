import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";



export async function GET(req, { params }) {
  try {
    const { slug } = params;
    const post = await prisma.post.findUnique({
      where:{
        slug:slug
      },
      include:{user:true}
    })
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log("error4", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
