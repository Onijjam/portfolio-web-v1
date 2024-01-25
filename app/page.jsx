import Hero from "/components/Hero";
import About from "/components/About";
import Quality from "/components/Quality";
import Work from "/components/Work";
import Cta from "/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Quality />
      <Work />
        <Cta />
    </main>
  )
}
