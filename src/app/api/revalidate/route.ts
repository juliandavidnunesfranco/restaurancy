import type {NextRequest} from "next/server";
import {revalidatePath} from "next/cache";
import {revalidateTag} from "next/cache";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);

  const tag = request.nextUrl.searchParams.get("tag") || "restaurant"; 

  revalidateTag(tag);

  return Response.json({success: true});
}

//usar un token secreto
// const secret = process.env.SECRET;
// tambien se puede usar el tag enviandolo por params con searchParams



