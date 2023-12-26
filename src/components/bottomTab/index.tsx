import Image from "next/image";
import { useRouter } from "next/router";

import { BottomTabButton, BottomTabWrapper } from "./styles";
import heroIcon from '../../../public/icons/hero.png';
import inventoryIcon from '../../../public/icons/inventory.png';
import magicIcon from '../../../public/icons/magics.png';
import storeIcon from '../../../public/icons/store.png';

export default function BottomTab({}) {
  const router = useRouter();
  const buttons = [
    {label: 'Herói', path: '/hero', icon: heroIcon},
    {label: 'Inventário', path: '/inventory', icon: inventoryIcon},
    {label: 'Magias', path: '/magics', icon: magicIcon},
    {label: 'Loja', path: '/store', icon: storeIcon},
  ]
  
  return (
    <BottomTabWrapper>
      {buttons.map((button, index) => 
        <BottomTabButton
          key={index} 
          href={button.path} 
          active={router.pathname === button.path}
        >
          <Image src={button.icon} alt="" priority/>
          {button.label}
        </BottomTabButton>  
      )}
    </BottomTabWrapper>
  )
}