import styles from './labelForIcon.module.scss';

type Props = {
  quantity: number;
};

export const LabelForIcon = ({ quantity }: Props) => {
  return <span className={styles.labelForIcon}>{quantity}</span>;
};
