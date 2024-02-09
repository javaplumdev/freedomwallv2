'use client';
import React from 'react';
import Form from '@/components/forms/Form';
import Button from '@/components/buttons/Button';
import useLogin from './useLogin';

const Login = () => {
  const { onSubmit, register, handleSubmit, errors, isLoading } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-box bg-base-200 p-6"
      style={{ width: '420px' }}
    >
      <Form register={register} errors={errors} />
      <Button label="Sign in" color="primary" isLoading={isLoading} />
    </form>
  );
};

export default Login;
