"use client";

import { Card, CardBody, Divider, Button } from "@nextui-org/react";
import {
  Cloud,
  Droplets,
  CloudRain,
  Waves,
  Zap,
  Sun,
  Lightbulb,
  Bell,
  CalendarDays,
} from "lucide-react";
import { getTimeNow } from "@/lib/utils/FormatedTime";

interface Props {
  airQuality: string;
  temperature: string;
  humidity: string;
  rainfall: string;
  waterQuality: string;
  electricityEfficiency: string;
  lightingCondition: string;
  warningSystem: string;
}

const CardInfoCondition = (props: Props) => {
  return (
    <Card className="max-w-full shadow-md p-4 lg:p-6">
      <CardBody>
        {/* Tanggal & Waktu */}
        <div className="flex gap-2 items-center mb-4">
          <CalendarDays size={20} />
          <p>{getTimeNow()}</p>
        </div>
        <Divider className="my-4" />

        {/* Suhu Saat Ini */}
        <div className="flex items-center gap-4">
          <Button
            isIconOnly
            variant="flat"
            radius="full"
            color="primary"
            className="h-16 w-16"
          >
            <Sun size={32} />
          </Button>
          <div>
            <h2 className="text-xl font-semibold">{props.temperature ?? "0°C"}</h2>
            <small className="text-gray-500">Suhu Saat ini</small>
          </div>
        </div>
        <Divider className="my-4" />

        {/* Informasi Kondisi */}
        <div className="grid lg:grid-cols-3 gap-6">
          <InfoItem icon={<Cloud size={20} />} label="Kualitas Udara" value={props.airQuality ?? "Baik"} />
          <InfoItem icon={<Droplets size={20} />} label="Kelembaban" value={props.humidity ?? "0%"} />
          <InfoItem icon={<CloudRain size={20} />} label="Curah Hujan" value={props.rainfall ?? "0mm"} />
          <InfoItem icon={<Waves size={20} />} label="Kualitas Air" value={props.waterQuality ?? "Bersih"} />
          <InfoItem icon={<Zap size={20} />} label="Efisiensi Listrik" value={props.electricityEfficiency ?? "0%"} />
          <InfoItem icon={<Lightbulb size={20} />} label="Kondisi Penerangan" value={props.lightingCondition ?? "Cukup"} />
        </div>

        <Divider className="my-4" />

        {/* Peringatan */}
        <div className="flex gap-2 items-center">
          <Bell size={20} />
          <p className="font-semibold">Peringatan: {props.warningSystem ?? "Normal"}</p>
        </div>
      </CardBody>
    </Card>
  );
};

// Komponen Reusable untuk Item Info
const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="border rounded-xl p-4 flex flex-col">
    <span className="flex gap-2 items-center mb-1 text-gray-600">
      {icon}
      <p className="font-medium">{label}</p>
    </span>
    <h3 className="text-lg font-semibold">{value}</h3>
  </div>
);

export default CardInfoCondition;
