import type { ReactNode } from "react";

export type MainLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export type BlurProps = {
  animated?: boolean;
  seed?: number;
};
