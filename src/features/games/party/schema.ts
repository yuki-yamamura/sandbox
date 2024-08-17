import { z } from "zod";

const PartyMembersSchema = z.string().array();

type PartyMembersSchemaType = z.infer<typeof PartyMembersSchema>;

export { PartyMembersSchema, type PartyMembersSchemaType };
