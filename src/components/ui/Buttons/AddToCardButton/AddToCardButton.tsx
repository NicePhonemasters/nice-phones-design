'use client';

import { useDispatch, useSelector } from 'react-redux';
import { AddButton } from '../AddButton/AddButton';
import { ItemCard } from '@/types/ItemCard';
import { CartItem } from '@/types/CartItem';
import { addItem, selectCartItems } from '@/slices/cartSlice';

type Props = {
  item: ItemCard;
};

export default function AddToCartButton({ item }: Props) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = cartItems.some((i) => i.itemId === item.itemId);

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

  return (
    <AddButton callback={handleClick} isInCart={isInCart}>
      {!isInCart ? 'Add to cart' : 'Added to cart'}
    </AddButton>
  );
}
