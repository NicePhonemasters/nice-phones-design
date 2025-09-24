import './addButton.scss';

type Props = {
  callback?: () => void;
};

export const AddButton = ({ callback }: Props) => {
  return (
    <button className="addButton" onClick={() => callback}>
      Add to cart
    </button>
  );
};
