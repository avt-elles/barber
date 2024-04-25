"use client";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SideMenu = () => {
  const { data } = useSession();

  const handleLogoutClick = () => signOut();

  const handleLoginClick = () => signIn("google");
  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      {data?.user ? (
        <div className="flex justify-between items-center px-5 py-6">
          <div className="flex items-center gap-3 ">
            <Avatar>
              <AvatarImage src={data.user?.image ?? ""} alt="Avatar" />
            </Avatar>
            <h2 className="font-bold">{data.user.name}</h2>
          </div>
          <Button size="icon">
            <LogOutIcon onClick={handleLogoutClick} />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col  gap-3 px-5 py-6">
          <div className="flex items-center gap-2">
            <UserIcon size={20} />
            <h2>Olá, faça seu Login</h2>
          </div>
          <Button
            variant="secondary"
            className="w-full justify-start"
            onClick={handleLoginClick}
          >
            <LogInIcon size="18" className="mr-2" />
            Fazer login
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3 px-5">
        <Button variant="outline" className="justify-start" asChild>
          <Link href="/">
            <HomeIcon size={18} className="mr-2" />
            Início
          </Link>
        </Button>
        {data?.user && (
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/booking">
              <CalendarIcon size={18} className="mr-2" />
              Agentamentos
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
