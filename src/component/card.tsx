import { FC } from "react";
import { CardContent, CardTitle, Card as ShadcnCard } from "./shadcn/card";
import Image from "next/image";
import { TransitionLink } from "./transitionLink";

type Props = {
  id: number;
  image: string;
  title: string;
  content: string;
};

export const Card: FC<Props> = ({ id, image, title, content }) => {
  return (
    <ShadcnCard className="overflow-hidden">
      <TransitionLink href={`/${id}`}>
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={`${title}`}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <CardTitle className="px-6 pt-6 pb-2">{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </TransitionLink>
    </ShadcnCard>
  );
};
