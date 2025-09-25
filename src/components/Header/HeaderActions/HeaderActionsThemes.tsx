/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import LightIcon from '../../../assets/icons/light.svg';
import DarkIcon from '../../../assets/icons/dark.svg';
import styles from './headerActions.module.scss';
import { selectTheme, toggleTheme } from '@/slices/themeSlice';

export function HeaderActionsThemes() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={styles.headerActionsThemes} onClick={handleToggle}>
      {theme === 'dark' ? (
        <LightIcon className={styles.headerActionsLight} />
      ) : (
        <DarkIcon className={styles.headerActionsDark} />
      )}
    </div>
  );
}
