import Image from "next/image";

const LoginHeader = ({ text }: { text: string }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex justify-center">
        <Image src="/logo-5d.png" alt="me" width="80" height="80" />
      </div>
      <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-mono">
        5D-Covoit - {text}
      </h2>
    </div>
  );
};

export default LoginHeader;
