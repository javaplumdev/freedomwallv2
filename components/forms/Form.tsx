import React from 'react';
import Icon from '../icons/Icon';
import { useRouter } from 'next/navigation';

const Form = (props: any) => {
  const { errors, register, error } = props;
  const router = useRouter();

  const { push } = router;

  return (
    <>
      <h1 className="text-2xl font-bold self-center">Log in</h1>

      <span className="self-center">
        Don't have an account?
        <a className="link link-secondary" onClick={() => push('/register')}>
          Register
        </a>
      </span>

      <a className="btn btn-neutral w-100">
        <i className="fa-brands fa-google text-primary"></i>
        Log in with Google
      </a>

      <div className="divider">OR</div>

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
          <a className="label-text link link-accent">Forgot password?</a>
        </div>

        <input {...register('password', { required: true })} type="password" className="input input-bordered" />
        {errors.password && <span className="text-red-600 my-2.5">This field is required</span>}
      </label>

      <div className="form-control">
        <label className="cursor-pointer label self-start gap-2">
          <input type="checkbox" className="checkbox" />
          <span className="label-text">Remember me</span>
        </label>
      </div>
    </>
  );
};

export default Form;
