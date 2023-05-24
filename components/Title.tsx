import React from "react";

const Title = ({ content }: { content: string }) => {
  return (
    <div className="flex items-center justify-between mb-6 px-4">
      <h2 className="text-base font-semibold leading-7 text-gray-900">{content}</h2>
    </div>
  );
};

export default Title;
