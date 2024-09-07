import z from "zod";

const UserSchema = z.object({
  name: z.string(),
  nickname: z.string().optional(),
  age: z.number().max(125, { message: "you could get the world record." }),
});

const ElfSchema = z.object({
  age: z.number().max(10000),
});

type UserSchemaType = z.infer<typeof UserSchema>;

export { UserSchema, ElfSchema, type UserSchemaType };
