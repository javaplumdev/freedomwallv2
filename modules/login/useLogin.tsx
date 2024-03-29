'use client';
import { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/db/firebase';

type Inputs = {
  email: string;
  password: string;
};

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit: SubmitHandler<any> = (data) => onSignin(data);

  const onSignin = async (data: any) => {
    setIsLoading(true);

    try {
      const { email, password } = data;

      await signInWithEmailAndPassword(auth, email, password);

      console.log('logged in!');
    } catch (e: any) {
      const { message } = e;

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, register, errors, handleSubmit, isLoading, error };
};

export default useLogin;
