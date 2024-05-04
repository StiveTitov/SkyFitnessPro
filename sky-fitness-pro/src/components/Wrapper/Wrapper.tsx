import { ReactNode } from "react";

type WrapperType = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperType) {
  return <main className="flex flex-col justify-center bg-background mx-auto w-screen px-4 py-10 lg:w-[1440px] lg:px-[140px]  lg:pb-44 lg:pt-12">{children}</main>;
}
