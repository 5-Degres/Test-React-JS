import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";
import { UsersIcon, XMarkIcon } from "@heroicons/react/24/outline";

const ModalContact = ({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [contactChoice, setContactChoice] = useState<"email" | "phone" | null>(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Fermer</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary sm:mx-0 sm:h-10 sm:w-10">
                    <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Contactez Céline
                    </Dialog.Title>
                    <div className="mt-2 pr-12">
                      <p className="text-sm text-gray-500">
                        Le conducteur accepte que vous le contactiez par téléphone, SMS, ou email. N&apos;hésitez pas à
                        lui poser toutes vos questions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <Tab.Group>
                    <Tab.List className="sm:flex gap-2">
                      <Tab className="inline-flex w-full justify-center rounded-md bg-primary my-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary">
                        Par téléphone
                      </Tab>
                      <Tab className="inline-flex w-full justify-center rounded-md bg-primary my-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary">
                        Par email
                      </Tab>
                    </Tab.List>
                  </Tab.Group>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalContact;
