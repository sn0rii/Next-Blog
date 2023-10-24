import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Cześć👋
        <span className="whitespace-nowrap"></span>jestem{" "}
        <span className="font-bold"> Wojtek</span>
      </p>
      <Posts />
    </main>
  );
}
