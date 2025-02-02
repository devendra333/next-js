
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {comments} from "../data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params; // Extract `id` from `params`
    console.log("id", id);

    const myComment = comments.find(comment => comment.id === Number(id));

     if(!myComment) {
        return new Response(JSON.stringify({
            text: "Comment not found",
            errorMessage: "Please try with another id"
        }), {
            status: 404,
            statusText: "Comment not found"
        }); // use new for non json
     }

    return Response.json(myComment); // No need to stringify here
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params; // Extract `id` from `params`
    const body = await request.json();

    const text = body.text

    console.log("id and text", id, body, text)

    const myCommentIndex = comments.findIndex(comment => comment.id === Number(id));

     if(myCommentIndex === undefined) {
        return new Response(JSON.stringify({
            text: "Comment not found",
            errorMessage: "Please try with another id"
        }), {
            status: 404,
            statusText: "Comment not found"
        }); // use new for non json
     }

     comments[myCommentIndex] = {...comments[myCommentIndex], text}

    return Response.json({
        id,
        text
    }); // No need to stringify here
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;

    const myCommentIndex = comments.findIndex(comment => comment.id === Number(id));

     if(myCommentIndex === undefined) {
        return new Response(JSON.stringify({
            text: "Comment not found",
            errorMessage: "Please try with another id"
        }), {
            status: 404,
            statusText: "Comment not found"
        }); // use new for non json
     }

     comments.splice(myCommentIndex, 1)

    return Response.json({
        id,
        text: "Deleted Succesafully"
    }); // No need to stringify here
}

