import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>Hello world</h1>
      <span className="animate-text-top block text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl">We're here to outperform</span>
      <span className="animate-text-bottom block text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl sm:mt-[-8px] md:mt-[-20px] xl:mt-[-30px]">performance agencies</span>
    </main>
  );
}
