import { FC, PropsWithChildren } from 'react';
import './input-area.scss';
import { classNames } from '@utils/classNames';

interface Props {
  state: 'default' | 'success' | 'error';
  className?: string;
}

export const InputArea: FC<PropsWithChildren<Props>> = (props) => {
  const { state = 'default', className, children } = props;

  return (
    <div className={classNames(
      'input-area',
      state == 'success' && 'input-area--success',
      state == 'error' && 'input-area--error',
      className
      )}>
      {children}
    </div>
  )
}