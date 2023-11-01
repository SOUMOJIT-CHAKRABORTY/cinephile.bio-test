"use client";
import React, { use, useState } from "react";

type Props = {};

const InputBox = (props: Props) => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="@ username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-full bg-gray-300 max-w-xs mt-10 text-black"
      />
    </div>
  );
};

export default InputBox;
