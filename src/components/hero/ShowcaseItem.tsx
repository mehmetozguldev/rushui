import React from "react";

export const ShowcaseItem = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="bg-white  shadow hover:shadow-indigo-100 hover:shadow-xl border-zinc-200 transition duration-500 rounded-xl  flex flex-col p-8 gap-5 ">
      <h3 className="font-semibold text-xl text-zinc-700">{title}</h3>
      <div className=" bg-zinc-100 border rounded-lg p-3 text-sm text-zinc-600 flex gap-3 flex-wrap">
        {children}
      </div>
    </div>
  );
};
