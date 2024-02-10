'use client';
import React from 'react';

import Form from '@/components/forms/Form';
import Button from '@/components/buttons/Button';

import useLogin from './useLogin';

const Login = () => {
  const { onSubmit, register, handleSubmit, errors, isLoading, error } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 rounded-box p-3 m-2 w-100 w-full max-w-lg">
      <Form register={register} errors={errors} error={error} />
      <Button label="Sign in" color="primary" isLoading={isLoading} />
    </form>
  );
};

export default Login;
