import styles from './selectCapacity.module.scss';

type Props = {
  text: string;
};

export const SelectCapacity = ({ text }: Props) => {
  return <div className={styles.capacityBlock}>{text}</div>;
};
