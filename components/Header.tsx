import { Bars3Icon } from "@heroicons/react/20/solid";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

const Header = () => {
  const navigation = [
    { name: "Tous les trajets", href: "/" },
    { name: "Mes annonces", href: "/account" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    return void 0;
  };

  return (
    <header className="absolute inset-x-0 top-0 z-10 flex h-16 border-b border-gray-900/10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-x-6">
          <button type="button" className="-m-3 p-3 md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Ouvrir le menu</span>
            <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
          <Link href="/">
            <Image src="/logo-5d.png" alt="me" width="45" height="45" />
          </Link>
        </div>
        <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-medium md:leading-6 md:text-gray-700 font-mono">
          {navigation.map((item, itemIdx) => (
            <Link key={itemIdx} href={item.href} className="hover:text-primary">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Voir les notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <Menu as="a" className="relative -m-1.5 p-1.5">
            <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Votre profil</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 mr-2">
                <span className="text-sm font-medium leading-none text-white">5D</span>
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-4 py-3">
                  <p className="text-sm">Connecté</p>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/account/profile"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Mon profil
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Déconnexion
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="-ml-0.5 flex h-16 items-center gap-x-6">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="-ml-0.5">
              <Link href="/" className="-m-1.5 block p-1.5">
                <span className="sr-only">5D-Covoit</span>
                <Image src="/logo-5d.png" alt="me" width="45" height="45" />
              </Link>
            </div>
          </div>
          <div className="mt-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
