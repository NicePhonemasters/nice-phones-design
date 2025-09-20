import './addButton.scss';

type Props = {
  callback: () => void;
};

export const AddButton: React.FC<Props> = () => {
  return <button className="addButton">Add to cart</button>;
};
