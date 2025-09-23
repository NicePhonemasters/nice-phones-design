import styles from './selectCapacity.module.scss';

type Props = {
  text: string;
};

export const SelectCapacity = ({ text }: Props) => {
  //Todo: Add SelectCapacityActive in classname witр condition//
  return <button className={styles.capacityBlock}>{text}</button>;
};
