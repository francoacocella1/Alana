import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre"),
  email: z.string().trim().email("Ingresa un email valido"),
  message: z.string().trim().min(10, "Contanos un poco mas"),
});

export type ContactInput = z.infer<typeof contactSchema>;
