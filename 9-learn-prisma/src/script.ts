// eslint-disable-next-line import/no-extraneous-dependencies
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'bob@prisma.io',
      name: 'Bob',
      posts: {
        create: {
          title: 'Hello, World!',
        },
      },
    },
  });
  console.log(user);
  const allUser = await prisma.user.findMany();
  console.log(allUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
