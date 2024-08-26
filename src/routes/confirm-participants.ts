import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function confirmTrip(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/participants/:participantId/confirm",
    {
      schema: {
        params: z.object({
          tripId: z.string().uuid(),
          participantId: z.string().uuid(),
        }),
      },
    },
    async (request, reply) => {
      const { participantId } = request.params;

      const participant = await prisma.participant.findUnique({
        where: {
          id: participantId,
        },
      });

      if (!participant) {
        throw new Error("Participant not found.");
      }

      if (participant.is_confirmed) {
        return reply.redirect(
          `http://localhost:3000/trips/${participant.trip_Id}`
        );
      }

      await prisma.participant.update({
        where: { id: participantId },
        data: { is_confirmed: true },
      });

      return reply.redirect(
        `http://localhost:3000/trips/${participant.trip_Id}`
      );
    }
  );
}
