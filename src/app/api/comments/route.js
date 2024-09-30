import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const slug = req.nextUrl.searchParams.get("slug");
    const comments = await prisma.post.findUnique({
        where: {
            ...(slug && { slug: slug }),
          },
          include:{
            comments:true
          }
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: "500" }
    );
  }
}
