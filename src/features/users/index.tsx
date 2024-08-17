import { UserSchema, ElfSchema } from "./schema";

export const User = () => {
  const user1 = {
    name: "nick",
    nickname: undefined,
  };
  const user2 = {
    name: "locy",
  };
  const user3 = {
    name: "rick",
    nickname: {
      xxx: "xxx",
    },
  };
  const user4 = {
    name: "hakase",
    nickname: "hakase",
    age: 200,
  };

  const result = UserSchema.safeParse(user4);
  const result2 = UserSchema.merge(ElfSchema).safeParse(user4);
  if (result2.success) {
    return (
      <div>
        <div>{user4.name}</div>
        {user4?.nickname && <div>user.nickname</div>}
      </div>
    );
  } else {
    console.log("see?");
    console.error({ error: result2.error });
    console.log(result2.error.message);
    return <div>something went wrong</div>;
  }
};
