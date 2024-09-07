"use client";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GenderEnum } from "@/app/constants";

const Schema = z.object({
  name: z.string().trim().min(1).max(255),
  age: z.coerce
    .number()
    .positive({ message: "please enter a positive value" })
    .max(200, { message: "please enter less than or equal 200" })
    .transform((value) => value.toString()),
  gender: z.enum(["0", "1"]).transform((value) => Number(value)),
  email: z.string().email(),
});
type SchemaType = z.infer<typeof Schema>;

export const FirstForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SchemaType>({
    defaultValues: {
      name: "",
      email: "",
    },
    resolver: zodResolver(Schema),
  });
  const onSubmit: SubmitHandler<SchemaType> = (data) => {
    console.log({ data });
  };
  const onInvalid: SubmitErrorHandler<SchemaType> = (error) => {
    console.log({ error });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input {...register("name")} />
        {errors?.name && (
          <div className="text-red-400">{errors.name.message}</div>
        )}
      </div>
      <div>
        <Label htmlFor="age">Age</Label>
        <Input {...register("age")} />
        {errors?.age && (
          <div className="text-red-400">{errors.age.message}</div>
        )}
      </div>
      <div>
        <Label htmlFor="gender">Gender</Label>
        <Input {...register("gender")} />
        {errors?.gender && (
          <div className="text-red-400">{errors.gender.message}</div>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input {...register("email")} />
        {errors?.email && (
          <div className="text-red-400">{errors.email.message}</div>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
