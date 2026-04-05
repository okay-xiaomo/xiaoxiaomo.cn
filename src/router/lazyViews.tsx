import { lazy, type ComponentType } from "react";

const wait = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const lazyWithDelay = <T extends { default: ComponentType<unknown> }>(
  factory: () => Promise<T>,
  delay = 500,
) =>
  lazy(() =>
    Promise.all([factory(), wait(delay)]).then(([module]) => module as T),
  );

export const Layout = lazyWithDelay(
  () => import("@/views/Layout").then((module) => ({ default: module.Layout })),
  1.5 * 1000,
);
