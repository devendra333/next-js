import { NextRequest } from "next/server";
import {comments} from "./data"
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function GET(request: NextRequest) { // instead of request as this providers methods to handle query params with ease
    const searchparams = request.nextUrl.searchParams;
    // We can dredict to thei endpoint when the request comnes to this endpoint : 
    // using redirect
    //  redirect("/api/v2/comments")
    const reqHeaders = await headers() // This is the way to access request headers 
    const cookieStore  = await cookies() // This is 
    const query = searchparams.get("query");
    // To set you can use c
    cookieStore.set("theme", "blue")
    let filterredComments = comments;
    if(query) {
        filterredComments = filterredComments.filter(comment => comment.text.includes(query))
    }
    return Response.json(filterredComments)
}


export async function POST(request: Request) {
    const req = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: req.text
    }

    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json", // This is the way to set the respeonse headers 
            "Set-Cookie": "themw=dark" // this is the way to send cookie, 
        },
        status: 201,
        statusText: "Created new cooment with id " +newComment.id 
    })
}
