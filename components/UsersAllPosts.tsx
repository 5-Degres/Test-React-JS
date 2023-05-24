import UsersEntry from "@/components/UsersEntry";
import { Post } from "@/pages";

const UsersAllPosts = ({ posts }: { posts: Post[] | null }) => {
  return (
    <ul role="list" className="space-y-4">
      {posts ? posts.map((post) => <UsersEntry post={post} key={post.id} />) : "Aucun trajet disponible"}
    </ul>
  );
};

export default UsersAllPosts;
