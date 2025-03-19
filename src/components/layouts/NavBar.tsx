"use client";

import { useState } from "react";
import { useGetData } from "@/lib/hooks/GET/useGetData";
import { getCurrentDate, getCurrentTime } from "@/lib/utils/moment";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FiRefreshCw } from "react-icons/fi"; // Import ikon refresh
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { Monitor } from "lucide-react";
import Link from "next/link";

export const NavBar = () => {
  const { data } = useGetData("others");
  const quotes = data?.data?.data?.quote_of_the_day;
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal state

  // Gabungkan quotes menjadi satu string
  const marqueeText = quotes?.join("  •  ") || null;

  return (
    <nav className="bg-zinc-900 shadow-xl px-8">
      <div className="container flex sm:justify-between items-center gap-2 flex-col sm:flex-row py-6 border-b">
        {/* Logo Sekolah */}
        <div className="flex items-center gap-4">
          <Image
            src="/Logo SMKN 1 Kawali.png"
            alt="logo"
            width={60}
            height={60}
          />
          <h5>SMKN 1 Kawali</h5>
        </div>

        {/* Marquee Text (Hanya Tampil di Layar Lebar) */}
        <div className="w-full lg:w-2/5 sm:hidden lg:block">
          <Marquee speed={50} gradient={false}>
            {marqueeText}
          </Marquee>
        </div>

        {/* Waktu & Refresh Icon */}
        <div className="flex items-center gap-4">
          <p className="text-center line-clamp-1">
            {getCurrentTime() + " | " + getCurrentDate()}
          </p>
          {/* Tombol Refresh */}
          <button
            onClick={onOpen}
            className="p-2 rounded-full bg-gradient-to-r from-[#5A9BFF] to-[#3036A0] hover:opacity-80 transition"
          >
            <FiRefreshCw size={22} className="text-white" />
          </button>
        </div>
      </div>

      {/* Marquee Text (Untuk Layar Kecil) */}
      <div className="w-full hidden sm:block mt-4 lg:hidden">
        <Marquee speed={50} gradient={false}>
          {marqueeText}
        </Marquee>
      </div>

      {/* Modal Konfirmasi Refresh */}
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent className="py-8 rounded-2xl shadow-lg">
          <ModalBody>
            {/* Judul dengan Font Lebih Besar */}
            <p className="text-center text-2xl sm:text-3xl font-bold mb-6">
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
              <div className="rounded-2xl p-8 shadow-lg flex flex-col items-center w-full h-56 sm:h-64 flex-grow bg-gradient-to-r from-[#5A9BFF] to-[#3036A0] text-white">
                <Monitor className="w-24 h-24 sm:w-28 sm:h-28 text-white" />
                <p className="mt-6 text-xl sm:text-2xl font-bold">IoT</p>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </nav>
  );
};
