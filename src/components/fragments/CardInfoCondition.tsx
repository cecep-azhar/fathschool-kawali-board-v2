"use client";

import { getTimeNow } from "@/lib/utils/FormatedTime";
import { Card, CardBody, Divider, Button } from "@nextui-org/react";
import {
  Cloud,
  Droplets,
  CloudRain,
  Waves,
  Bolt,
  Lightbulb,
  Bell,
  Calendar,
  Sun,
} from "lucide-react";

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
    <Card className="max-w-full shadow-md p-4">
      <CardBody>
        <div className="flex gap-2 items-center mt-1">
          <Calendar size={18} />
          <p>{getTimeNow()}</p>
        </div>
        <Divider className="my-4" />

        <div className="flex items-center gap-4">
          <Button isIconOnly variant="flat" radius="full" color="primary" className="h-16 w-16">
            <Sun size={32} />
          </Button>
          <div>
            <h2>{props.temperature ?? "0°C"}</h2>
            <small>Suhu Saat Ini</small>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: <Cloud size={18} />, label: "Kualitas Udara", value: props.airQuality ?? "Baik" },
            { icon: <Droplets size={18} />, label: "Kelembaban", value: props.humidity ?? "0%" },
            { icon: <CloudRain size={18} />, label: "Curah Hujan", value: props.rainfall ?? "0mm" },
            { icon: <Waves size={18} />, label: "Kualitas Air", value: props.waterQuality ?? "Bersih" },
            { icon: <Bolt size={18} />, label: "Efisiensi Listrik", value: props.electricityEfficiency ?? "0%" },
            { icon: <Lightbulb size={18} />, label: "Kondisi Penerangan", value: props.lightingCondition ?? "Cukup" },
          ].map((item, index) => (
            <div key={index} className="border rounded-xl p-4">
              <div className="flex gap-2 items-center mb-1">
                {item.icon}
                <p>{item.label}</p>
              </div>
              <h3>{item.value}</h3>
            </div>
          ))}
        </div>

        <Divider className="my-4" />
        <div className="flex gap-2 items-center">
          <Bell size={18} />
          <p>Peringatan: {props.warningSystem ?? "Normal"}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardInfoCondition;
