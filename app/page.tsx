import Image from "next/image";

import { BarbershopItem } from "@/components/barbershop-item";
import BookingItem from "@/components/booking-item";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  PageContainer,
  PageSectionContent,
  PageSectionScroller,
  PageSectionTitle,
} from "@/components/ui/page";
import { getBarbershops, getPopularBarbershops } from "@/data/barbershops";
import banner from "@/public/banner.png";

export default async function Home() {
  const barbershops = await getBarbershops();
  const popularBarbershops = await getPopularBarbershops();

  return (
    <div>
      <Header />
      <PageContainer>
        <div className="px-4">
          <Image
            src={banner}
            alt="banner"
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <PageSectionContent>
          <PageSectionTitle> Agendamentos</PageSectionTitle>
          <BookingItem />
        </PageSectionContent>

        <PageSectionContent>
          <PageSectionTitle> Barbearias</PageSectionTitle>
          <PageSectionScroller>
            {barbershops &&
              barbershops.map((barbershop) => (
                <BarbershopItem key={barbershop.id} barbershop={barbershop} />
              ))}
          </PageSectionScroller>
        </PageSectionContent>

        <PageSectionContent>
          <PageSectionTitle> Barbearias populares</PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershops &&
              popularBarbershops.map((barbershop) => (
                <BarbershopItem key={barbershop.id} barbershop={barbershop} />
              ))}
          </PageSectionScroller>
        </PageSectionContent>
      </PageContainer>
    </div>
  );
}
