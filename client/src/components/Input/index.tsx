import { ComponentPropsWithRef, type FC } from 'react';

import styles from './Input.module.css';

const Input: FC<ComponentPropsWithRef<'input'>> = (props) => {
  const { id, className, style, type, onChange, value, placeholder, ...rest } =
    props;
  return (
    <input
      id={id}
      className={`${styles.input} ${className}`}
      style={style}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default Input;
