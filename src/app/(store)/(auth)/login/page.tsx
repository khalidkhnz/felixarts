import { googleAuthAction } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex justify-center items-center bg-[#242424] text-white h-screen">
      <form action={googleAuthAction}>
        <Button type="submit" className="bg-white text-black">
          Login with Google <LogIn />
        </Button>
      </form>
    </div>
  );
};

export default page;
