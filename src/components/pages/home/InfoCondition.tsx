"use client";

import CardInfoCondition from "@/components/fragments/CardInfoCondition";
import { useGetCondition } from "@/lib/hooks/GET/useCondition";
import { Card, Tab, Tabs } from "@heroui/react";

const InfoCondition = () => {
  const { Condition } = useGetCondition();

  return (
    <main className="space-y-6">
      <div>
        <h4>Info Kondisi Sekolah</h4>
        <p>Pantau kondisi lingkungan sekolah secara real-time.</p>

        <Tabs className="mt-4" color="primary" variant="underlined">
          <Tab title="Kondisi Saat ini" key="kondisi-saat-ini">
            <CardInfoCondition {...Condition} />
          </Tab>
          <Tab isDisabled title="Status Perangkat" key="status-perangkat"></Tab>
        </Tabs>
      </div>

      <div>
        <h4>Lihat CCTV Sekolah</h4>
        <p>Pantau kondisi lingkungan sekolah secara real-time.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card className="h-52 shadow-md border" key={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default InfoCondition;
