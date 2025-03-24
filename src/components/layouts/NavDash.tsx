"use client";

import { Home, User, Bell, Settings, Moon, Sun } from "lucide-react";
import { useCustomTheme } from "@/lib/utils/useCustomTheme";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

// Menu navigasi
const Menu = [
  { icon: Home, name: "Beranda", link: "/" },
  { icon: User, name: "Profil", link: "/profile" },
  { icon: Bell, name: "Notifikasi", link: "/notification" },
  { icon: Settings, name: "Pengaturan", link: "/settings" },
];

const NavDash = () => {
  const path = usePathname(); // ✅ Tidak perlu useState + useEffect
  const { isDarkMode, toggleDarkMode, isMounted } = useCustomTheme();

  // ✅ Pastikan tidak merender sebelum isMounted selesai
  if (!isMounted) return null;

  return (
    <Navbar isBordered className="py-2">
      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label="Toggle menu" />
      </NavbarContent>

      {/* Logo & Brand */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image
            src="/Logo SMKN 1 Kawali.png"
            alt="logo"
            width={45}
            height={45}
            priority
          />
          <p className="font-bold text-inherit ms-6 lg:text-large dark:text-white">
            SMKN 1 KAWALI
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Action Buttons */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            aria-label="Toggle Dark Mode"
            onClick={toggleDarkMode} // ✅ Pastikan menggunakan onClick
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly variant="light" aria-label="User Profile">
            <User size={20} />
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <NavbarMenu className="py-6">
        {Menu.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={item.link}
              className={classNames("py-2 flex items-center gap-2.5", {
                "text-primary": path === item.link,
              })}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavDash;