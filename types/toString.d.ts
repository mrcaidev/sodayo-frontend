export type ToString<T> = {
  [P in keyof T]: string;
};
