import { PartyMembersSchema } from "./schema";
import z from "zod";

export const PartyMembers = () => {
  const members = ["foo", "bar", "hoge"] as const;
  const ticket = "poi";
  const result = PartyMembersSchema.transform((members) => members.length)
    .pipe(
      z
        .number()
        .min(5, { message: "your party is too small to defeat the boss." }),
    )
    .safeParse(members);

  const result2 = z
    .string()
    .refine((str) => str === "piyo", {
      message:
        "you are not allowed to go through the game unless you have the secret ticket.",
    })
    .safeParse(ticket);

  console.log(result?.error?.message);
  console.log(result2?.error?.message);

  return <div>PartyMembers</div>;
};
