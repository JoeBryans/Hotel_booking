import Hero from "@/components/Header/Header/Hero";
import Search from "@/components/Header/Header/Search";
import Cities from "@/components/Header/Header/home/cities";
import Discover from "@/components/Header/Header/home/discover";
import GuestHouse from "@/components/Header/Header/home/guest_house";
import PropertyType from "@/components/Header/Header/home/property_type";
import UniqueStay from "@/components/Header/Header/home/unique_stay";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Search />
      <div className="bg-slate-200 text-slate-700 lg:px-52 md:px-14 px-10 min-h-[100vh] flex flex-col gap-8">
        <Discover />
        <Cities />
        <PropertyType />
        <UniqueStay />
        <GuestHouse />
      </div>
    </>
  );
}
