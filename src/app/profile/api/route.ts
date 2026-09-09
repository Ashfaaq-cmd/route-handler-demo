import { request } from "http";
import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(req: NextRequest) {
  // const requestHeaders = new Headers(req.headers);
  // console.log(requestHeaders.get("Authorization"));

  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  const theme = req.cookies.get("theme");
  console.log(theme);
  const cookieStore = await cookies();
  cookieStore.set("results per page", "10");
  console.log(cookieStore.get("results per page"));
   return new Response
   ("<h1>Profile API Data</h1>", {
  headers: {
    "Content-Type": "text/html",
    "set-cookie" : "theme=dark",
  },
}
);
 
}
