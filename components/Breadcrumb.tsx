import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const Breadcrumb = ({ pages }: { pages: any[] }) => {
  return (
    <div className="relative isolate overflow-hidden pt-16 font-mono bg-white">
      <div className="py-6 border-b border-b-gray-900/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <Link href="/" className="text-gray-400 hover:text-primary">
                    <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">Accueil</span>
                  </Link>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <a
                      href={page.href}
                      className="ml-4 text-sm text-gray-500 hover:text-primary"
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
