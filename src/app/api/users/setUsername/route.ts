import dbConnect from "@/dbConnect/dbConnect";
import User from "@/modals/User";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username } = reqBody;
    const session = await getServerSession();

    if (session) {
      dbConnect();
      const user = await User.findOne({ email: session.user.email });

      if (!user?.username) {
        user.username = username;
        await user.save();

        return NextResponse.json({ message: "Username updated successfully" });
      } else {
        return NextResponse.json({ message: "Welcome User" }, { status: 400 });
      }
    }
  } catch (error) {
    console.error("Error in POST route:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
}
