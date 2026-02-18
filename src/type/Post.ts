export type Post = {
    createdAt: string,
    deletedAt: string | null,
    id: string,
    updatedAt: string | null,
    content: string,
    status: string,
    title: string,
    user: {
        name: string,
    },
    userId: string,
}