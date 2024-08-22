import fastify from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify();

{
  /* retake at 31:00 */
}

app.get("/cadastrar", async () => {
  await prisma.trip.create({
    data: {
      destination: "Florianóplis",
      starts_at: new Date(),
      ends_at: new Date(),
    },
  });

  return "Registro cadastado com sucesso !";
});

app.get("/listar", async () => {
  const trips = await prisma.trip.findMany();

  return trips;
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server running");
});
