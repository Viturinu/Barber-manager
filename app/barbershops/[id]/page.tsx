import BarbershopInfo from "@/app/barbershops/[id]/_components/barbershop-info";
import ServiceItem from "@/components/service-item";
import { prisma } from "@/lib/prisma";

interface BarbershopDetailsPageProps {
  params: {
    id: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  const { id } = await params;
  if (!id) {
    // TODO: redirect to home page
    return null;
  }

  const barbershop = await prisma.barbershop.findUnique({
    where: {
      id: id,
    },
    include: {
      services: true,
    },
  });
  console.log(JSON.stringify(barbershop));
  if (!barbershop) {
    // TODO: redirect to home page
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="flex flex-col gap-4 px-5 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;
