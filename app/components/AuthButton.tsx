"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const AuthButton = (props: Props) => {
  const session = useSession();
  return (
    <button
      onClick={() => {
        signIn();
      }}
      className="btn btn-active btn-accent mt-10"
    >
      {`next ->`}
    </button>
  );
};

export default AuthButton;
