type Push<T, U> = T extends readonly any[] ? [...T, U] : never;
