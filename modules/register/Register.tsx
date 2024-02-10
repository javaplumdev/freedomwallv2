'use client';
import React from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/components/buttons/Button';
import Icon from '@/components/icons/Icon';

import useRegister from './useRegister';

const Register = () => {
  const { onSubmit, register, errors, handleSubmit, isLoading, error } = useRegister();
  const router = useRouter();
  const { push } = router;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 rounded-box p-3 m-2 w-100 w-full max-w-lg">
      <>
        <h1 className="text-2xl font-bold self-center">Create an account</h1>

        <span className="self-center">
          Already have an account?
          <a className="link link-secondary" onClick={() => push('/')}>
            Log in
          </a>
        </span>

        <a className="btn btn-neutral">
          <i className="fa-brands fa-google text-primary"></i>
          Create with Google
        </a>

        <div className="divider my-0">OR</div>
        {error && (
          <div role="alert" className="alert alert-error">
            <Icon label="warning" />
            <span>{error}</span>
          </div>
        )}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Email</span>
          </div>

          <input {...register('email', { required: true })} className="input input-bordered" />
          {errors.email && <span className="text-red-600 my-.5">This field is required</span>}
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Password</span>
          </div>

          <input {...register('password', { required: true })} type="password" className="input input-bordered" />
          {errors.password && <span className="text-red-600 my-.5">This field is required</span>}
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Confirm password</span>
          </div>

          <input
            {...register('confirm_password', { required: true })}
            type="password"
            className="input input-bordered"
          />
          {errors.confirm_password && <span className="text-red-600 my-.5">This field is required</span>}
        </label>

        <div className="form-control">
          <label className="cursor-pointer label self-start gap-2">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">
              I accept the
              <a className="link link-accent">Terms and Conditions</a>
            </span>
          </label>
        </div>

        <Button label="Create" color="primary" isLoading={isLoading} />
      </>
    </form>
  );
};

export default Register;
