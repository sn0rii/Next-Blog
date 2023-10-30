import Link from "next/link";

export default function notFound() {
  return (
    <div className="text-center">
      <p className="mt-10">Przepraszam, szukany post nie istnieje</p>
      <Link href="/">Powrót na strone główną</Link>
    </div>
  );
}
