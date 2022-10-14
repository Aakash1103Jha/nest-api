import { ComponentPropsWithRef, type FC } from 'react';

import styles from './Card.module.css';

const Card: FC<ComponentPropsWithRef<'div'>> = (props) => {
  const { className, style, children, ...rest } = props;
  return (
    <div className={`${styles.card} ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

export default Card;
