import React from 'react';
import { GiCactus, GiBarn } from 'react-icons/gi';

const categories = [
  {
    label: 'Health & Fitness',
    icon: GiCactus,
    description: 'Health & Fitness'
  },
  {
    label: 'Liquor',
    icon: GiBarn,
    description: 'alcoholic beverages'
  }
];

const Categories = () => {
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <category.icon />
          <h2>{category.label}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
