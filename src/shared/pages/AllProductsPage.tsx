import React from 'react';
import ProductsList from '../components/ProductsList';

export type Product = {
  id: string;
  title: string;
  image: string;
};

const products: Product[] = [
  {
    id: 'p1',
    title: 'Shrimp - 150 - 250',
    image: 'http://dummyimage.com/194x100.png/5fa2dd/ffffff',
  },
  {
    id: 'p2',
    title: 'Beef Dry Aged Tenderloin Aaa',
    image: 'http://dummyimage.com/147x100.png/ff4444/ffffff',
  },
  {
    id: 'p3',
    title: 'Ice - Clear, 300 Lb For Carving',
    image: 'http://dummyimage.com/175x100.png/ff4444/ffffff',
  },
  {
    id: 'p4',
    title: 'Sugar - Individual Portions',
    image: 'http://dummyimage.com/177x100.png/cc0000/ffffff',
  },
  {
    id: 'p5',
    title: 'Beef - Bresaola',
    image: 'http://dummyimage.com/194x100.png/dddddd/000000',
  },
  {
    id: 'p6',
    title: 'Duck - Legs',
    image: 'http://dummyimage.com/240x100.png/dddddd/000000',
  },
  {
    id: 'p7',
    title: 'Yogurt - Peach, 175 Gr',
    image: 'http://dummyimage.com/223x100.png/dddddd/000000',
  },
  {
    id: 'p8',
    title: 'Cranberries - Dry',
    image: 'http://dummyimage.com/215x100.png/cc0000/ffffff',
  },
  {
    id: 'p9',
    title: 'Soup - Beef, Base Mix',
    image: 'http://dummyimage.com/170x100.png/5fa2dd/ffffff',
  },
  {
    id: 'p10',
    title: 'Squash - Pattypan, Yellow',
    image: 'http://dummyimage.com/227x100.png/ff4444/ffffff',
  },
];

const AllProductsPage: React.FC = () => <ProductsList products={products} />;

export default AllProductsPage;
