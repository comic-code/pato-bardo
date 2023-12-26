import Image from "next/image";

import { HeroHeaderWrapper } from "./styles";
import HeroImage from '../../../../../public/wizard.png';

export default function HeroHeader({}) {
  return (
    <HeroHeaderWrapper>
      <Image src={HeroImage} alt="Herói" />
      <div className="infos">
        <h1>Herói</h1>
        <span>
          Mago <span className="level">(Nível 3)</span>
        </span>
      </div>
    </HeroHeaderWrapper>
  )
}