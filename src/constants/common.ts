export type JsonT =
  | boolean
  | string
  | number
  | { [ket: string]: JsonT }
  | JsonT[]
  | null
  | undefined;

export type StringifyT = (
  value: any,
  replacer?: (key: string, value: any) => any,
  space?: number,
) => string;
