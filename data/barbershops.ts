import { prisma } from "@/lib/prisma";

export const getBarbershops = async () => {
  try {
    const barbershops = await prisma.barbershop.findMany();
    return barbershops;
  } catch (error) {
    console.log("Error fetching barbershops", error);
  }
};

export const getPopularBarbershops = async () => {
  try {
    const barbershops = await prisma.barbershop.findMany({
      orderBy: {
        name: "desc",
      },
    });
    return barbershops;
  } catch (error) {
    console.log("Error fetching barbershops", error);
  }
};
