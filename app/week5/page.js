import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="text-5xl font-bold m-6 text-center text-blue-600">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}