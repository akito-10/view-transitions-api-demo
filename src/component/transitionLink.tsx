"use client";

import { useTransitionRouterPush } from "@/hook/useTransitionRouterPush";
import Link from "next/link";
import { FC, useCallback } from "react";

type Props = {
  className?: string;
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const TransitionLink: FC<Props> = ({
  className,
  href,
  children,
  onClick,
}) => {
  const { routerPushWithTransition } = useTransitionRouterPush();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      }

      const to = e.currentTarget.href;
      routerPushWithTransition(to);
    },
    [routerPushWithTransition, onClick]
  );

  return (
    <Link className={className} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};
