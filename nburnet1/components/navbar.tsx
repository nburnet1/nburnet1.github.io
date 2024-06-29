import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
} from "@/components/icons";

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Resume from "../public/resume.json"

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="xl" position="static" isBlurred={false} className="bg-transparent" >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/n.svg" width={32} height={32} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <p className="font-bold text-inherit">{Resume.basics.name}</p>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label={Resume.basics.profiles[1].network} href={Resume.basics.profiles[1].url}>
            <LinkedInIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={Resume.basics.profiles[0].url}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className=""
            href={"#contact"}
            color="primary"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label={Resume.basics.profiles[1].network} href={Resume.basics.profiles[1].url}>
          <LinkedInIcon className="text-default-500" />
        </Link>
        <Link isExternal aria-label={Resume.basics.profiles[0].network} href={Resume.basics.profiles[0].url}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        {/* <NavbarMenuToggle /> */}
      </NavbarContent>

      {/* <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {Resume.basics.profiles.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={item.url}
                size="lg"
              >
                {item.network}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu> */}
    </NextUINavbar>
  );
};
