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
    title: 'Tree Oyster',
    image:
      'https://gluckspilze.com/media/image/product/943/lg/austernpilz-saegemehlbrut-fuer-die-biologische-pilzzucht.jpg',
  },
];

const AllProductsPage: React.FC = () => <ProductsList products={products} />;

export default AllProductsPage;
