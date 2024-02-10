import { Card } from "@/component/card";
import { CARD_DATA } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <ul className="list-none grid grid-cols-3 gap-4 p-10">
        {CARD_DATA.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </ul>
    </main>
  );
}
