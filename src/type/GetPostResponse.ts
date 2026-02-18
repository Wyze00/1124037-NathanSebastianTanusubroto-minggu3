import type { Post } from "./Post";

export type GetPostResponse = {
    info: {
        count: number;
    },
    records: Post[];
}