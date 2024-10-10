// trpc/context.ts

export const createContext = async () => {
  const session = await getSession();
  const ctx = {
    session,
  };

  return ctx;
};

export type Context = typeof createContext;
