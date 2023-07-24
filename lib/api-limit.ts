import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';
import { MAX_FREE_COUNTS } from '@/constants';

export async function increaseApiLimit() {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimit) {
    if (userApiLimit.count === MAX_FREE_COUNTS) {
      await prismadb.userApiLimit.update({
        where: { userId: userId },
        data: { count: MAX_FREE_COUNTS },
      });
    } else {
      await prismadb.userApiLimit.update({
        where: { userId: userId },
        data: { count: userApiLimit.count + 1 },
      });
    }
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
}

export async function checkApiLimit() {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
}

export async function getApiLimitCount() {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
}
