import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Product } from "@/components/sections/Product";
import { Dentist } from "@/components/sections/Dentist";
import { Athletes } from "@/components/sections/Athletes";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Product />
      <Dentist />
      <Athletes />
      <Process />
      <Testimonials />
      <FAQ />
    </>
  );
}
