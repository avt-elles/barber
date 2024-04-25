"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { AwardIcon, MenuIcon } from "lucide-react";

const Header = () => {
  // const { data } = useSession();

  // const handleLoginClick = async () => {
  //   await signIn();
  // };

  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="FSW Barber" height={50} width={200} />
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon size={18} />
        </Button>

        {/* {data?.user ? (
          <div>
            <Button onClick={() => signOut()}>Logout</Button>
            <h1>{data.user.name}</h1>
          </div>
        ) : (
          <Button onClick={handleLoginClick}>Login</Button>
        )} */}
      </CardContent>
    </Card>
  );
};

export default Header;
