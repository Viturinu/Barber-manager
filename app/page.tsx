import Image from "next/image";

import BookingItem from "@/components/booking-item";
import Header from "@/components/header";
import { prisma } from "@/lib/prisma";
import banner from "@/public/banner.png";

export default async function Home() {
  const barbershops = await prisma.barbershop.findMany();

  return (
    <div>
      <Header />
      <div className="px-4">
        <Image
          src={banner}
          alt="banner"
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="mt-4 space-y-4 px-4">
        <h3 className="text-xs font-bold uppercase">Agendamentos</h3>
        <BookingItem />
      </div>
      {barbershops.map((barbershop) => (
        <div key={barbershop.id}>
          <h3 className="text-xs font-bold uppercase"> {barbershop.name}</h3>
        </div>
      ))}
    </div>
  );
}
