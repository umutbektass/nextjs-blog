import { authSession, getAuthSession } from "@/app/auth";
import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

//GET ALL COMMENTS OF A POST
export async function GET(req) {
  try {
    const postSlug = req.nextUrl.searchParams.get("postSlug");
    const comments = await prisma.comment.findMany({
        where: {
            ...(postSlug && { postSlug }),
          },
          include:{
            user:true
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

// CREATE A COMMENT
export async function POST(req){
  const session = await getAuthSession()
  if(!session){
    return NextResponse.json({message:"Not Authenticated!"},{status:401})
  }
 try {
  const body = await req.json()
  const comment = await prisma.comment.create({
   data:{...body,userEmail: session.user.email}
  })
  return NextResponse.json(comment,{status:201})

 } catch (error) {
  console.log("error",error)
  return  NextResponse.json( {message:error.message},{status:201})
 }
}
