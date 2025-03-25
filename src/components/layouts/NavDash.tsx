"use client";

import { Home, User, Bell, Settings, Moon, Sun, Monitor } from "lucide-react";
import { useCustomTheme } from "@/lib/utils/useCustomTheme";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Marquee from "react-fast-marquee";
import { FiRefreshCw } from "react-icons/fi";
import { useEffect, useState } from "react";

// Menu navigasi
// const Menu = [
//   { icon: Home, name: "Beranda", link: "/" },
//   { icon: User, name: "Profil", link: "/profile" },
//   { icon: Bell, name: "Notifikasi", link: "/notification" },
//   { icon: Settings, name: "Pengaturan", link: "/settings" },
// ];

const NavDash = () => {
  const path = usePathname(); // ✅ Tidak perlu useState + useEffect

  const { isDarkMode, toggleDarkMode, isMounted } = useCustomTheme();

  const { isOpen, onOpen, onClose } = useDisclosure(); // State untuk modal

  // Gunakan state untuk memastikan modal hanya muncul sekali
  const [hasOpenedModal, setHasOpenedModal] = useState(false);

  // Saat halaman pertama kali dimuat, tampilkan modal
  useEffect(() => {
    if (!hasOpenedModal) {
      onOpen();
      setHasOpenedModal(true);
    }
  }, [hasOpenedModal, onOpen]);

  // ✅ Pastikan tidak merender sebelum isMounted selesai
  if (!isMounted) return null;

  return (
    <nav className="bg-zinc-900 shadow-xl px-8">
      {/* Bagian Atas Navbar */}
      <div className="container flex sm:justify-between items-center gap-2 flex-col sm:flex-row py-6 border-b">
        {/* Logo Sekolah */}
        <div className="flex items-center gap-4">
          <Image
            src="/Logo SMKN 1 Kawali.png"
            alt="logo"
            width={60}
            height={60}
          />
          <h5 className="text-white font-bold">SMKN 1 Kawali</h5>
        </div>

        {/* Waktu & Tombol Refresh */}
        <div className="flex items-center gap-4">
          {/* <p className="text-center text-white">
            {getCurrentTime() + " | " + getCurrentDate()}
          </p> */}
          {/* Tombol Refresh */}
          <button
            onClick={onOpen}
            className="p-2 rounded-full bg-gradient-to-r from-[#5A9BFF] to-[#3036A0] hover:opacity-80 transition"
          >
            <FiRefreshCw size={22} className="text-white" />
          </button>

          {/* Tombol Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Moon size={20} className="text-white" /> : <Sun size={20} className="text-white" />}
          </button>

          {/* Profil User */}
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <User size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Menu Navigasi */}
      {/* <div className="flex justify-center py-4 space-x-6">
        {Menu.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className={classNames("flex items-center gap-2 p-3 text-white rounded-lg cursor-pointer hover:bg-gray-800 transition", {
              "bg-gray-800": item.link === "/",
            })}>
              <item.icon size={20} />
              {item.name}
            </div>
          </Link>
        ))}
      </div> */}

      {/* Modal Pilihan Dashboard */}
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent className="py-8 rounded-2xl shadow-lg">
          <ModalBody>
            <p className="text-center text-2xl sm:text-3xl font-bold mb-6 text-white">
              Pilih Dashboard yang Ingin Dilihat:
            </p>

            {/* Grid Card */}
            <div className="grid grid-cols-3 gap-10 mt-6 px-6">
              {/* Absensi */}
              <Link href="/" className="w-full">
                <div className="cursor-pointer rounded-2xl p-8 shadow-lg flex flex-col items-center w-full h-56 sm:h-64 flex-grow bg-gradient-to-r from-[#5A9BFF] to-[#3036A0] text-white hover:opacity-90 transition">
                  <Monitor className="w-24 h-24 sm:w-28 sm:h-28 text-white" />
                  <p className="mt-6 text-xl sm:text-2xl font-bold">Absensi</p>
                </div>
              </Link>

              {/* KBM */}
              <Link href="/kbm" className="w-full">
                <div className="cursor-pointer rounded-2xl p-8 shadow-lg flex flex-col items-center w-full h-56 sm:h-64 flex-grow bg-gradient-to-r from-[#5A9BFF] to-[#3036A0] text-white hover:opacity-90 transition">
                  <Monitor className="w-24 h-24 sm:w-28 sm:h-28 text-white" />
                  <p className="mt-6 text-xl sm:text-2xl font-bold">KBM</p>
                </div>
              </Link>

              {/* IoT */}
              <Link href="/iot" className="w-full">
                <div className="cursor-pointer rounded-2xl p-8 shadow-lg flex flex-col items-center w-full h-56 sm:h-64 flex-grow bg-gradient-to-r from-[#5A9BFF] to-[#3036A0] text-white hover:opacity-90 transition">
                  <Monitor className="w-24 h-24 sm:w-28 sm:h-28 text-white" />
                  <p className="mt-6 text-xl sm:text-2xl font-bold">IoT</p>
                </div>
              </Link>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </nav>
  );
};

export default NavDash;