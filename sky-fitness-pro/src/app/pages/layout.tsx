import Header from "@/components/Header/Header";
import Wrapper from "@/components/Wrapper/Wrapper";
import { ReactElement } from "react";

export default function Layout({
  children,
}: {
  children: ReactElement<any, any>;
}) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
