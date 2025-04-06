import { use } from "react";
import PostSingle from "./PostSingle";

export default function Posts({ postPromise }) {
  const posts = use(postPromise);
  console.log(posts);

  return (
    <div className="card">
      <h2>All Posts: {posts.length}</h2>
      {posts.map((post) => (
        <PostSingle key={post.id} post={post} />
      ))}
    </div>
  );
}
