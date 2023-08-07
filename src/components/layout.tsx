import { ReactNode } from "react";
import { Header } from "./header";
type Props = { children: ReactNode };

export function Layout({ children }: Props) {
  return (
    <div>
      <h1>Mi proyecto awesómico!</h1>
      <Header />
      {children}
    </div>
  );
}
