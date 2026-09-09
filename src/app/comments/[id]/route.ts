import { comments } from "../data";
export async function GET(request: Request, { params }: { params: Promise <{ id: string }> }) {
const { id } = await params;
const comment = comments.find((comment) => comment.id === parseInt(id));
return Response.json(comment);
}
export async function PATH(request: Request, { params }: { params: Promise <{ id: string }> }) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments[index].text = text;
    return Response.json(comments[index]),{
        headers: {
            'Content-Type': 'application/json',
            status:200,
        }
    }
}

export async function DELETE(request: Request, { params }: { params: Promise <{ id: string }> }) {
    const { id } = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    const deletedComment = comments.splice(index, 1);
    return Response.json(deletedComment)

}