"use client";

import CardInfoCondition from "@/components/fragments/CardInfoCondition";
import { useGetCondition } from "@/lib/hooks/GET/useCondition";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";

const InfoCondition = () => {
  const { Condition, ConditionLoad } = useGetCondition();

  return (
    <main className="container py-10 space-y-6">
    {/* Informasi Kondisi Sekolah */}
    <section>
      <h4 className="text-xl font-semibold">Info Kondisi Sekolah</h4>
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
          {ConditionLoad ? (
            <Skeleton className="w-full h-40 rounded-lg" />
          ) : (
            <CardInfoCondition {...Condition} />
          )}
        </Tab>
        <Tab key="status-perangkat" title="Status Perangkat" isDisabled />
      </Tabs>
    </section>
  
    {/* CCTV Sekolah */}
    <section>
      <h4 className="text-xl font-semibold">Lihat CCTV Sekolah</h4>
      <p className="text-gray-600 dark:text-gray-400">
        Pantau kondisi lingkungan sekolah secara real-time.
      </p>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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
