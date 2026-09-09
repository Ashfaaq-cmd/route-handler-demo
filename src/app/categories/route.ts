export async function GET(){
    const categories = [
        { id: 1, name: "Technology" },
        { id: 2, name: "Science" },
        { id: 3, name: "Health" },
        { id: 4, name: "Business" },
        { id: 5, name: "Entertainment" },
    ];
    return Response.json(categories);
}