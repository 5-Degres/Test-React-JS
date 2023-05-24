import LayoutHome from "@/components/LayoutHome";
import Homepage from "@/components/Homepage";
import data from "@/data/posts.json";

export type Post = {
  id: number;
};

const HomePage = () => {
  const posts = JSON.parse(JSON.stringify(data));

  return (
    <LayoutHome>
      <Homepage posts={posts} />
    </LayoutHome>
  );
};

export default HomePage;
