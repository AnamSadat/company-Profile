import z from 'zod';

export const SchemaForm = z.object({
  name: z.string().min(1, { message: 'Minimal 1 huruf' }),
  email: z.email({ message: 'Email tidak valid' }),
  pesan: z.string().min(10, { message: 'Minimal 10 huruf' }),
});

export type SchemaFormInput = z.infer<typeof SchemaForm>;
export type ContactForm = { id: number } & SchemaFormInput;
