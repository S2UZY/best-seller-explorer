import BookCard from "@/components/BookCard";
import BookGrid from "@/components/BookGrid";
import Title from "@/components/Title";
import { API_URL } from "@/constants";

export interface ListDetailsDto {
  results: {
    display_name: string;
    books: {
      title: string;
      author: string;
      book_image: string;
      amazon_product_url: string;
    }[];
  };
}

async function getListDetails(name: string): Promise<ListDetailsDto> {
  const response = await fetch(`${API_URL}/list?name=${name}`);
  const json = await response.json();
  return json;
}

interface ListDetailProps {
  params: { id: string };
}

export default async function ListDetails({ params }: ListDetailProps) {
  const { id } = params;
  const {
    results: { books, display_name },
  } = await getListDetails(id);

  return (
    <main>
      <Title>{display_name}</Title>
      <BookGrid>
        {books.map((value) => {
          return (
            <BookCard
              key={value.title}
              title={value.title}
              author={value.author}
              bookImage={value.book_image}
              amazonProductUrl={value.amazon_product_url}
            />
          );
        })}
      </BookGrid>
    </main>
  );
}
