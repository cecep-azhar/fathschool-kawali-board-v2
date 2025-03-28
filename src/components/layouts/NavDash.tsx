"use client";

import { Icons } from "@/lib/resource/IconExport";
import { useTheme } from "@/lib/utils/useTheme";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Menu = [
  {
    icon: Icons.home,
    name: "Beranda",
    link: "/",
  },
  // {
  //   icon: Icons.infoBold,
  //   name: "Kondisi Sekolah",
  //   link: "/dashboard/school-condition",
  // },
  {
    icon: Icons.profile,
    name: "Profil",
    link: "/profile",
  },
  {
    icon: Icons.notification,
    name: "Notifikasi",
    link: "/notification",
  },
  {
    icon: Icons.settings,
    name: "Pengaturan",
    link: "/settings",
  },
];

const NavDash = () => {
  const path = usePathname();
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Navbar disableAnimation isBordered className="py-2">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src="/docs/logo.png" alt="logo" width={45} height={45} />
          <p className="font-bold text-inherit ms-6 lg:text-large dark:text-white">
            SMKN 1 KAWALI
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button isIconOnly variant="light" onPress={toggleDarkMode}>
            {isDarkMode ? <Icons.moon /> : <Icons.sun />}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly variant="light">
            <Icons.user />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="py-6">
        {Menu.map((item, index) => (
          <NavbarMenuItem key={index} as={"a"} href={item.link}>
            <span
              className={`py-2 flex items-center gap-2.5 ${
                path === item.link ? "text-primary" : ""
              }`}
            >
              <item.icon />
              {item.name}
            </span>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavDash;
