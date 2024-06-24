"use server";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    console.log(`Creating post with title: ${title}`);

    // update database
    // await prisma.post.create({
    //     data: {
    //         title
    //     }
    // });
}