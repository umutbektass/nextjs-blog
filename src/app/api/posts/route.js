import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const cat = searchParams.get("cat");
  const POST_PER_PAGE = 2;
  const query = { skip: POST_PER_PAGE * (page - 1), take: POST_PER_PAGE, 
    where:{
      ...(cat && { catSlug : cat })
    }
   };
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({where:query.where}),
    ]);
    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (error) {
    console.log("error text", error);
    return NextResponse.json(
      { messages: "Something went wrong!" },
      { status: 500 }
    );
  }
}
