import styles from './selectCapacity.module.scss';

type Props = {
  text: string;
  handleClick?: () => void;
};

export const SelectCapacity = ({ text, handleClick }: Props) => {
  //Todo: Add SelectCapacityActive in classname witр condition//
  return (
    <button className={styles.capacityBlock} onClick={() => handleClick()}>
      {text}
    </button>
  );
};
