'use client';

import { useDispatch, useSelector } from 'react-redux';

import TwoIconButton from '../TwoIconButton/TwoIconButton';
import {
  addItem,
  removeItem,
  selectIsInFavourites,
} from '@/slices/favouriteSlice';
import FavouritesDefault from '@/assets/icons/favourite-default.svg';
import FavouritesActive from '@/assets/icons/favourite-active.svg';
import { ItemCard } from '@/types/ItemCard';

type Props = {
  item: ItemCard;
};

export default function FavouriteButton({ item }: Props) {
  const dispatch = useDispatch();
  const itemId = item.itemId;

  const isInFavourites = useSelector(selectIsInFavourites(itemId));

  const handleClick = () => {
    if (isInFavourites) {
      dispatch(removeItem(itemId));
    } else {
      dispatch(addItem(item));
    }
  };

  return (
    <TwoIconButton
      iconSelected={FavouritesActive}
      iconUnselected={FavouritesDefault}
      toggled={isInFavourites}
      handleClick={handleClick}
    />
  );
}
