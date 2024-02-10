import { TransitionLink } from "@/component/transitionLink";
import { CARD_DATA } from "@/lib/constants";
import Image from "next/image";

export default function Detail({ params: { id } }: { params: { id: string } }) {
  const cardData = CARD_DATA.find((data) => data.id === Number(id));

  if (!cardData) {
    return <div>Not found</div>;
  }

  return (
    <main className="p-10">
      <Image
        src={cardData?.image}
        alt={cardData?.title}
        width={400}
        height={400}
      />
      <h1 className="font-bold text-xl mt-2">{cardData?.title}</h1>
      <p>{cardData?.content}</p>
      <TransitionLink
        className="mt-6 w-40 bg-slate-900 text-white px-4 py-2 rounded inline-block text-center"
        href="/"
      >
        戻る
      </TransitionLink>
    </main>
  );
}
