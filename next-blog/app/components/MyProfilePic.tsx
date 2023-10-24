import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto ">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black mx-auto mt-8 "
        src="/images/profile-photo.JPG"
        width={150}
        height={200}
        alt="Wojtek"
        priority={true}
      />
    </section>
  );
}
