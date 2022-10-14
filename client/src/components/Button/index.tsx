import { ComponentPropsWithRef, type FC } from 'react';

import styles from './Button.module.css';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  label: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { style, label, className, onClick, ...rest } = props;
  return (
    <button
      className={`${styles.button} ${className}`}
      style={style}
      onClick={onClick}
      //   type={type}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
