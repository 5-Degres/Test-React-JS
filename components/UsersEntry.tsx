import React, { useState } from "react";
import ModalContact from "@/components/ModalContact";

const UsersEntry = ({ post }: { post: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalContact open={open} setOpen={setOpen} />
      <li className="relative flex justify-between gap-x-6 pl-4 py-6 sm:px-6 bg-white shadow sm:rounded-md">
        ...{/* TODO */}
      </li>
    </>
  );
};

export default UsersEntry;
