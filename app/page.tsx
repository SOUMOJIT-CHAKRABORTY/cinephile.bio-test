import Image from "next/image";
import AuthButton from "./components/AuthButton";
import InputBox from "./components/InputBox";

export default function Home() {
  return (
    <div className="text-2xl flex flex-col justify-center items-center h-screen gap-6 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-200 via-green-400 to-purple-700">
      <h1 className="text-blue-800">Hello Cinephile 👋</h1>
      <div className="artboard phone-1 border rounded-md shadow-md drop-shadow-sm bg-white flex flex-col gap-5 p-5">
        <h1 className="text-2xl text-center text-black">Welcome</h1>
        <div className="flex flex-col gap-6 justify-between items-center">
          <h1 className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            repellendus consectetur quae, illo eveniet obcaecati sequi sed
            maiores, eaque eius enim corrupti. Adipisci porro doloribus
            similique sequi sunt quis sit.
          </h1>
          {/* <input
            type="text"
            placeholder="@ username"
            className="input w-full bg-gray-300 max-w-xs mt-10 text-black"
          /> */}
          <InputBox />

          {/* <button className="btn btn-active btn-accent mt-10">{`next ->`}</button> */}
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
