import { z } from "zod";

export const loginFormSchema = z.object({
    email: z
        .string()
        .min(1, "O e-mail é obrigatório")
        .email("O e-mail deve estar no formato correto"),
    password: z.string().min(1, "A senha é obrigatória"),
});

export type TloginFormValues = z.infer<typeof loginFormSchema>;
