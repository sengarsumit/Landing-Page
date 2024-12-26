import { Navbar } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"
import { ProductShowcase } from "@/sections/ProductShowcase"
import { Pricing } from "@/sections/Pricing"
import { Testimonials } from "@/sections/Testimonials"
export default function Home() {
  return (
  <>
  <Navbar />
  <Hero />
  <LogoTicker/>
  <ProductShowcase />
  <Pricing/>
  <Testimonials/>
  </>
  )
}
