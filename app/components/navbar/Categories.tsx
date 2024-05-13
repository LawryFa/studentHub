'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'PC/Laptop',
    icon: TbBeach,
    description: 'Personal Computers and accesories',
  },
  {
    label: 'Mobile Phones',
    icon: GiWindmill,
    description: 'cellphones, tablets and accesories',
  },
  {
    label: 'Clothes',
    icon: MdOutlineVilla,
    description: 'anything that can be worn'
  },
  {
    label: 'Books',
    icon: TbMountain,
    description: 'Anything that can be read'
  },
  {
    label: 'Food',
    icon: TbPool,
    description: 'anything legal that can be drunk or eaten'
  },
  {
    label: 'Hair services',
    icon: GiIsland,
    description: 'hair services'
  },
  {
    label: 'Barber',
    icon: GiBoatFishing,
    description: 'barber services'
  },
  {
    label: 'Tutors',
    icon: FaSkiing,
    description: 'tutorial services'
  },
  {
    label: 'Software',
    icon: GiCastle,
    description: 'all software products and services'
  },
  {
    label: 'Accomodation',
    icon: GiCaveEntrance,
    description: 'Housing hub'
  },
  {
    label: 'Transport',
    icon: GiForestCamp,
    description: 'Transport services'
  },
  {
    label: 'Cosmetics',
    icon: BsSnow,
    description: 'Cosmetic services'
  },
  {
    label: 'Health & Fitness',
    icon: GiCactus,
    description: 'Health & Fitness'
  
  },
  {
    label: 'Liquor',
    icon: GiBarn,
    description: 'alcoholic beverages'
  },
  {
    label: 'Events',
    icon: IoDiamond,
    description: 'events'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;
