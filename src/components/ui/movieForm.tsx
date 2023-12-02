import React from "react";
import { Input } from "@nextui-org/react";

export default function MovieForm() {
  const placements = ["inside", "outside", "outside-left"];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-default-500 text-small">
          Currently watching Movie
        </h3>
        <div className="flex w-[45%] flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="email"
            // label="Currently watching"
            //   labelPlacement={placement}
            placeholder="  Movie title"
            //   description={placement}
          />
        </div>
        <h3 className="text-default-500 text-small">
          Currently watching Serise
        </h3>
        <div className="flex w-[45%] flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="email"
            // label="Currently watching"
            //   labelPlacement={placement}
            placeholder="  Movie title"
            //   description={placement}
          />
        </div>
        <h3 className="text-default-500 text-small">Fav Movie</h3>
        <div className="flex w-[45%] flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="email"
            // label="Currently watching"
            //   labelPlacement={placement}
            placeholder="  Movie title"
            //   description={placement}
          />
        </div>
      </div>
    </div>
  );
}
