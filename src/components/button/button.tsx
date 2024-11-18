import { FC, PropsWithChildren } from 'react';
import { classNames } from '@utils/classNames';
import './button.scss';

interface Props {
  color?: 'purple' | 'green' | 'orange' | 'red';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  const { color = 'purple', disabled, className, children, onClick } = props;

  return (
    <button
      className={classNames('button', `button--${color}`, className)}
      disabled={disabled} onClick={onClick}
    >
      {children}
    </button>
  )
}