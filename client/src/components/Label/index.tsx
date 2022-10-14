import { ComponentPropsWithRef, type FC } from 'react';

import styles from './Label.module.css';

export interface LabelProps extends ComponentPropsWithRef<'label'> {
  isMandatory?: boolean;
  label: string;
}

const Label: FC<LabelProps> = (props) => {
  const {
    isMandatory = false,
    label,
    className,
    style,
    htmlFor,
    ...rest
  } = props;
  return (
    <>
      <label className={`${className}`} style={style} {...rest}>
        {label}
      </label>
      {isMandatory === true && (
        <span className={`${styles.label_required}`}> *</span>
      )}
    </>
  );
};

export default Label;
