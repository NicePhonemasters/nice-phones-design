'use client';
import classNames from 'classnames';
import styles from './OneIconButton.module.scss';

type Props = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  handleClick?: () => void;
  styleName?: string;
};

export default function OneIconButton({
  icon: Icon,
  disabled,
  handleClick,
  styleName,
}: Props) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={classNames(styles.oneIconButton, styleName)}
    >
      <Icon className={styles.oneIconButton__icon} />
    </button>
  );
}
