import { FC, PropsWithChildren } from 'react';
import './input-area.scss';
import { classNames } from '@utils/classNames';

interface Props {
  className?: string;
}

export const InputArea: FC<PropsWithChildren<Props>> = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames('input-area', className)}>
      {children}
    </div>
  )
}