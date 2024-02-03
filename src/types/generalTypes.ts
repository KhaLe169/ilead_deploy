export type WithChildrenProps<T = undefined> = T extends undefined
  ? { children: React.ReactNode }
  : { children: React.ReactNode } & T;
