import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className="text-sm p-10 rounded-md">{children}</div>;
};

export default AuthLayout;
