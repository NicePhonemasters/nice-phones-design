'use client';

import { useDispatch } from 'react-redux';
import { AddButton } from '../AddButton/AddButton';
import { ItemCard } from '@/types/ItemCard';
import { CartItem } from '@/types/CartItem';
import { addItem } from '@/slices/cartSlice';

type Props = {
  item: ItemCard;
};

export default function AddToCartButton({ item }: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const cartItem: CartItem = {
      id: item.id,
      itemId: item.itemId,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    };

    dispatch(addItem(cartItem));
  };

  return <AddButton callback={handleClick}>{'Add to cart'}</AddButton>;
}
