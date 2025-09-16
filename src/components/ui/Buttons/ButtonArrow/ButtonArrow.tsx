enum Direction {
  Up,
  Down,
  Right,
  Left,
}

type Props = {
  direction: Direction;
  disabled: boolean;
  handleClick: () => void;
};

export default function ButtonArrow({
  direction,
  disabled,
  handleClick,
}: Props) {
  console.log(direction);
  return <button onClick={handleClick} disabled={disabled}></button>;
}
