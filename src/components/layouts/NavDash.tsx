"use client";

import { FaHome, FaUser, FaBell, FaCog, FaSun, FaMoon } from "react-icons/fa";
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

const Menu = [
  {
    icon: FaHome,
    name: "Beranda",
    link: "/",
  },
  {
    icon: FaUser,
    name: "Profil",
    link: "/profile",
  },
  {
    icon: FaBell,
    name: "Notifikasi",
    link: "/notification",
  },
  {
    icon: FaCog,
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
            {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly variant="light">
            <FaUser size={20} />
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
              <item.icon size={20} />
              {item.name}
            </span>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavDash;
