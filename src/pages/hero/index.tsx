import HeroHeader from "./components/heroHeader";
import MainStatus from "./components/mainStatus";
import SecondaryStatus from "./components/secondaryStatus";

export default function Hero({}) {
  return (
    <main>
      <HeroHeader />
      <MainStatus />
      <SecondaryStatus />
    </main>
  )
}