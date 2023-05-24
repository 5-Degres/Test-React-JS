import { PlusSmallIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { ReactElement } from "react";

const Navbar = ({
  title,
  withButtonPost,
  children,
}: {
  title?: string;
  withButtonPost?: boolean;
  children?: ReactElement;
}) => {
  return (
    <div className="relative isolate overflow-hidden pt-16 font-mono bg-white">
      <div className="pb-4 pt-6 sm:pb-6 border-b border-b-gray-900/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
          {title ? <h1 className="text-base font-semibold leading-7 text-gray-900">{title}</h1> : children}
          {withButtonPost && (
            <Link
              href="/account/create"
              className="ml-auto flex items-center gap-x-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-bold"
            >
              <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
              Proposer un trajet
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
