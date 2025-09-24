import styles from './addButton.module.scss';

type Props = {
  callback?: () => void;
  children?: React.ReactNode; // додаємо можливість передавати текст чи JSX всередину
};

export const AddButton = ({ callback, children }: Props) => {
  return (
    <button className={styles.addButton} onClick={callback}>
      {children || 'Add to cart'}
    </button>
  );
};
