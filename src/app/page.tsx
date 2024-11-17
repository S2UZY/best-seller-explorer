import ListCard from "@/components/ListCard";
import ListGrid from "@/components/ListGrid";
import Title from "@/components/Title";
import { API_URL } from "@/constants";

interface ListsDto {
  results: { list_name: string; display_name: string }[];
}

async function getLists(): Promise<ListsDto> {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const { results } = await getLists();

  return (
    <>
      <main>
        <Title>THE NEW YORK TIMES BEST SELLER EXPLORER</Title>
        <ListGrid>
          {results.map((value) => {
            return (
              <ListCard
                key={value.list_name}
                listName={value.list_name}
                displayName={value.display_name}
              />
            );
          })}
        </ListGrid>
      </main>
    </>
  );
}
