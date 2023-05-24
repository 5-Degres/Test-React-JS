import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import UsersAllPosts from "@/components/UsersAllPosts";
import UsersLastPosts from "@/components/UsersLastPosts";
import { useState } from "react";
import { Post } from "@/pages";

const Homepage = ({ posts }: { posts: Post[] }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<Post[] | null>(posts);

  const filterPosts = (letter: string) => {
    {
      /* TODO */
    }
  };

  return (
    <>
      <Navbar withButtonPost>
        <>
          <h1 className="text-base font-semibold leading-7 text-gray-900">Trajets disponibles</h1>
          <div className="order-last flex w-full gap-x-2 text-sm leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
            {alphabet.map((letter) => (
              <button
                onClick={() => filterPosts(letter)}
                key={letter}
                className={letter === selectedLetter ? "text-primary" : "text-gray-800"}
              >
                {letter}
              </button>
            ))}
          </div>
        </>
      </Navbar>
      <div className="space-y-16 py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <Title content="Tous les trajets" />
            <UsersAllPosts posts={filteredPosts} />
          </div>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <Title content="Dernières annonces" />
            <UsersLastPosts posts={posts.slice(-3)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
