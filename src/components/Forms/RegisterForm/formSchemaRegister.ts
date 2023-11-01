import { z } from "zod";

export const userFormSchema = z.object({
    name: z.string().min(1, "Campo obrigatório"),
    email: z.string().min(1, "Campo Obrigatório").email("Email inválido"),
    password: z.string(),
    cpf: z.string().min(1, "Campo obrigatório"),
    phoneNumber: z.string().min(1, "Campo obrigatório"),
    birthDate: z.string(z.date()).min(1, "Campo obrigatório"),
    description: z
        .string()
        .max(120, "Máximo de 120 caracteres")
        .nullish()
        .default(null),
});

export const addressFormSchema = z.object({
    zipCode: z
        .string()
        .min(1, "Campo obrigatório")
        .max(8, "Max. 8 caracteres, somente números"),
    state: z.string().min(1, "Campo obrigatório").max(25, "Max. 25 caracteres"),
    city: z.string().min(1, "Campo obrigatório").max(40, "Max. 40 caracteres"),
    street: z
        .string()
        .min(1, "Campo obrigatório")
        .max(100, "Max. 100 caracteres"),
    number: z.number().positive().nullish().default(null),
    complement: z
        .string()
        .max(50, "Max. 50 caracteres")
        .nullish()
        .default(null),
});

export const registerFormSchema = z
    .object({
        name: z.string().min(1, "Campo obrigatório"),
        email: z.string().min(1, "Campo Obrigatório").email("Email inválido"),
        password: z
            .string()
            .min(8, "Senha obrigatória e deve conter no mínimo 8 caracteres")
            .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
            .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
            .regex(/(?=.*?[0-9])/, "É necessário ao menos um número")
            .regex(
                /(?=.*?[!@#$%^&*()\-__+.])/,
                "É necessário ao menos um caractere especial"
            ),
        confirm: z.string().min(1, "Campo Obrigatŕio"),
        cpf: z.string().min(1, "Campo obrigatório"),
        phoneNumber: z.string().min(1, "Campo obrigatório"),
        birthDate: z.string(z.date()).min(1, "Campo obrigatório"),
        description: z
            .string()
            .max(120, "Máximo de 120 caracteres")
            .nullish()
            .default(null),
        zipCode: z
            .string()
            .min(1, "Campo obrigatório")
            .max(8, "Max. 8 caracteres, somente números"),
        state: z
            .string()
            .min(1, "Campo obrigatório")
            .max(25, "Max. 25 caracteres"),
        city: z
            .string()
            .min(1, "Campo obrigatório")
            .max(40, "Max. 40 caracteres"),
        street: z
            .string()
            .min(1, "Campo obrigatório")
            .max(100, "Max. 100 caracteres"),
        number: z.number().positive().nullish().default(null),
        complement: z
            .string()
            .max(50, "Max. 50 caracteres")
            .nullish()
            .default(null),
    })
    .refine(({ password, confirm }) => password === confirm, {
        message: "As senhas precisam corresponder",
        path: ["confirm"],
    });

export type TRegisterFormData = z.infer<typeof registerFormSchema>;
