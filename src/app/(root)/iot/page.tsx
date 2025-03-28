import NavDash from "@/components/layouts/NavDash";
import InfoCondition from "@/components/pages/home/InfoCondition";

export default function Page() {
  return (
    <>
      <NavDash />

      <main className="container py-10">
        <InfoCondition />
      </main>
    </>
  );
}
