import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export const revalidate = 10;

export default function Home() {
  return (
    <div className=" mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Cześć👋
        <span className="whitespace-nowrap"></span>jestem{" "}
        <span className="font-bold"> Wojtek</span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
