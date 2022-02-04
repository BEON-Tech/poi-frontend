declare module '@hookform/resolvers/yup/dist/yup.umd' {
  type resolver = (...arg: any) => any;
  export const yupResolver: resolver;
}
