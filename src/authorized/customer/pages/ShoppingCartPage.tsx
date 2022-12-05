import React from 'react';
import ShoppingCartList from '../components/ShoppintCartList';

const items: Product[] = [
  {
    id: 'p1',
    title: 'Shrimp - 150 - 250',
    image: 'http://dummyimage.com/194x100.png/5fa2dd/ffffff',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem atque, dolore earumdolorem ipsa tempore voluptatibus quasi reiciendis aut doloribus eos, culpa sint debitis quisquam mollitia ratione velit ut. Ad!',
  },
  {
    id: 'p2',
    title: 'Beef Dry Aged Tenderloin Aaa',
    image: 'http://dummyimage.com/147x100.png/ff4444/ffffff',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem atque, dolore earumdolorem ipsa tempore voluptatibus quasi reiciendis aut doloribus eos, culpa sint debitis quisquam mollitia ratione velit ut. Ad!',
  },
  {
    id: 'p3',
    title: 'Ice - Clear, 300 Lb For Carving',
    image: 'http://dummyimage.com/175x100.png/ff4444/ffffff',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem atque, dolore earumdolorem ipsa tempore voluptatibus quasi reiciendis aut doloribus eos, culpa sint debitis quisquam mollitia ratione velit ut. Ad!',
  },
];

const ShoppingCartPage: React.FC = () => <ShoppingCartList items={items} />;

export default ShoppingCartPage;
