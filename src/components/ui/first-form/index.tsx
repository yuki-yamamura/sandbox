"use client";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z.string().trim().min(1).max(255),
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
