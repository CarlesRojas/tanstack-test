import { PostErrorComponent } from "@/components/PostError";
import { fetchPost } from "@/utils/posts";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts_/$postId/deep")({
    loader: async ({ params: { postId } }) =>
        fetchPost({
            data: postId,
        }),
    errorComponent: PostErrorComponent,
    component: PostDeepComponent,
});

function PostDeepComponent() {
    const post = Route.useLoaderData();

    return (
        <div className="space-y-2 p-2">
            <Link to="/posts" className="block py-1 text-blue-800 hover:text-blue-600">
                ← All Posts
            </Link>
            <h4 className="text-xl font-bold underline">{post.title}</h4>
            <div className="text-sm">{post.body}</div>
        </div>
    );
}
