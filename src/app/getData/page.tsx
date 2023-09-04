import Image from "next/image";
import { getData } from "@/app/service";

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const bookApi = async () => {
  const data = await getData("https://simple-books-api.glitch.me/books");
  console.log("books-API:", data);
  return (
    <div className="bg-black">
      <h1 className="font-bold text-4xl text-zinc-400 flex items-center justify-center m-6">
        API CRUD
      </h1>
      <br />
      <ol>
        {data.map((obj: Book, index: number) => {
          return (
            <div key={index}>
              <li className="text-white text-2xl px-4">Id: {obj.id}</li>
              <li className="text-white text-2xl px-4">Name: {obj.name}</li>
              <li className="text-white text-2xl px-4">Type:{obj.type}</li>
              <li className="text-white text-2xl px-4 border-b-4">
                Available: {obj.available}
              </li>
            </div>
          );
        })}
      </ol>

      <p className="text-xs text-white">
        Note:src/app/bookApi && src/app/service.ts
      </p>
      <p className="text-xs text-white">
        Note:as api ka sara work in 2 page pe h
      </p>
    </div>
  );
};

export default bookApi;
