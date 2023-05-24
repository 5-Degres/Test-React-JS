import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import ModalContact from "@/components/ModalContact";
import dayjs from "dayjs";

const UsersCard = ({ post }: { post: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalContact open={open} setOpen={setOpen} />
      <li className="overflow-hidden sm:rounded-xl sm:border border-gray-200 bg-white shadow sm:shadow-sm">
        <div className="flex items-center gap-x-4 bg-white p-6">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700">
            <span className="text-xs font-medium leading-none text-white">{post.direction}</span>
          </span>
          <div className="text-sm font-medium leading-6 font-mono">
            <div className={post.from === "Penta'" ? "text-gray-400" : "text-gray-900"}>De {post.from}</div>
            <div className={post.to === "Penta'" ? "text-gray-400" : "text-gray-900"}>à {post.to}</div>
          </div>
        </div>
        <dl className="-my-1 divide-y divide-gray-100 px-6 py-2 text-sm leading-6">
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Jour de départ</dt>
            <dd className="text-gray-700">
              <time dateTime={post.date}>{dayjs(post.date).format("DD/MM/YYYY")}</time>
            </dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Créneau de départ</dt>
            <dd className="text-gray-700">
              <time dateTime={post.time}>{post.time}</time>
            </dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Places disponibles</dt>
            <dd className="text-gray-700 flex items-start gap-x-2">
              <div className="text-gray-700">{post.complet ? "0" : "2"}/2</div>
              {post.complet && (
                <span className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">
                  Complet
                </span>
              )}
            </dd>
          </div>
        </dl>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200 bg-gray-50 border-t border-gray-200">
            <div className="flex w-0 flex-1">
              <span className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm text-gray-600">
                Avec Céline
              </span>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <button
                onClick={() => setOpen(true)}
                className="group relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-primary hover:text-white"
              >
                <EnvelopeIcon className="h-5 w-5 text-gray-600 group-hover:text-white" aria-hidden="true" />
                Contacter
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default UsersCard;
