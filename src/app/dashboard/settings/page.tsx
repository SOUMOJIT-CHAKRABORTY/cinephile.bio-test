import { Input } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

const Settings = async (props: Props) => {
  const session = await getServerSession();
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <p className="text-white text-3xl font-bold">Settings</p>
      <h3 className="text-default-500 text-small">Currently watching Movie</h3>
      <div className="flex w-[45%] flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="email"
          // label="Currently watching"
          //   labelPlacement={placement}
          //   placeholder={`${session?.user?.name}`}
          value={`${session?.user?.name}`}

          //   description={placement}
        />
        <button className="bg-blue-400 px-3 py-2">Save</button>
        <button className="bg-red-400">delete account</button>
      </div>
    </div>
  );
};

export default Settings;
