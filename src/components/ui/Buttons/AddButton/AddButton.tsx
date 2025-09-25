import classNames from 'classnames';
import styles from './addButton.module.scss';

type Props = {
  callback: () => void;
  children: React.ReactNode; // додаємо можливість передавати текст чи JSX всередину
  isInCart: () => void;
};

export const AddButton = ({ callback, children, isInCart }: Props) => {
  return (
    <button
      className={classNames(styles.addButton, {
        [styles.addButtonActive]: isInCart,
      })}
      onClick={() => {
        event.stopPropagation();
        callback();
      }}
    >
      {children || 'Add to cart'}
    </button>
  );
};
