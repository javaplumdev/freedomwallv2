import React from 'react';
import Loader from '../loader/Loader';

type ButtonProps = {
  label: string;
  color?: string;
  isLoading?: boolean;
};

const Button = (props: ButtonProps) => {
  const { label, isLoading, color } = props;

  return (
    <button className={`btn btn-${color}`} disabled={isLoading}>
      {isLoading && <Loader />}
      {label}
    </button>
  );
};

export default Button;
