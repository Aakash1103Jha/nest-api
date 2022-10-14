import { ComponentPropsWithRef, type FC } from 'react';

import styles from './Form.module.css';

const Form: FC<ComponentPropsWithRef<'form'>> = (props) => {
  const { className, style, onSubmit, children, ...rest } = props;
  return (
    <form
      className={`${styles.form} ${className}`}
      style={style}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
