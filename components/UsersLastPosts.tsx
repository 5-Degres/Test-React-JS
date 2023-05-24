import UsersCard from "@/components/UsersCard";
import { Post } from "@/pages";

const UsersLastPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {posts.map((post) => (
        <UsersCard post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default UsersLastPosts;
