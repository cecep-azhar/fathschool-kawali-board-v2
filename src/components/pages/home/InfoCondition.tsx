"use client";

import CardInfoCondition from "@/components/fragments/CardInfoCondition";
import { useGetCondition } from "@/lib/hooks/GET/useCondition";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";

const InfoCondition = () => {
  const { Condition, ConditionLoad } = useGetCondition();

  return (
    <main className="container pt-4 space-y-6">
    {/* Bagian atas sejajar dengan Navbar */}
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
      {/* Informasi Kondisi Sekolah */}
      <section>
        <h4 className="text-2xl font-bold">Info Kondisi Sekolah</h4>
        <p className="text-gray-600 dark:text-gray-400">
          Pantau kondisi lingkungan sekolah secara real-time.
        </p>
  
        <Tabs
          aria-label="Info Kondisi"
          className="mt-4"
          color="primary"
          variant="underlined"
        >
          <Tab key="kondisi-saat-ini" title="Kondisi Saat Ini">
            
              <CardInfoCondition {...Condition} />
           
          </Tab>
          <Tab key="status-perangkat" title="Status Perangkat" isDisabled />
        </Tabs>
      </section>
    </div>
  
    {/* Bagian CCTV Sekolah tetap di bawah secara vertikal */}
    <section>
      <h4 className="text-2xl font-bold">Lihat CCTV Sekolah</h4>
      <p className="text-gray-600 dark:text-gray-400">
        Pantau kondisi lingkungan sekolah secara real-time.
      </p>
  
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card className="h-52 shadow-md border" key={item}>
            <CardBody className="flex items-center justify-center text-gray-400">
              CCTV {item}
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  </main>
  
  
  );
};

export default InfoCondition;
