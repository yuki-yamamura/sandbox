"use client";

import { Button } from "./button-with-css-module";

export const Buttons = () => (
  <>
    <Button intent="primary" onClick={() => alert("primary button clicked!")} />
    <Button
      intent="secondary"
      onClick={() => alert("secondary button clicked!")}
    />
    <Button onClick={() => alert("what happened?")} />
    <Button
      onClick={() => alert("cannot click this button")}
      status="disabled"
    />
    <Button status="waiting" />
    <Button maxWidth="full">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
      ducimus perferendis. Quidem incidunt repellat modi quas quae adipisci
      tenetur sequi asperiores, odit rerum delectus obcaecati debitis maxime,
      natus fugit repudiandae?
    </Button>
  </>
);
