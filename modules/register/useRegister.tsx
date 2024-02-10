'use client';
import { useState } from 'react';

import { toast } from 'react-toastify';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/db/firebase';
import { useRouter } from 'next/navigation';

import { toast_config } from '@/config/toast';

type Inputs = {
  email: string;
  password: string;
  confirm_password: string;
};

const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { push } = router;

  const onSubmit: SubmitHandler<any> = (data) => onSignin(data);

  const onSignin = async (data: any) => {
    setIsLoading(true);

    try {
      const { email, password } = data;

      await createUserWithEmailAndPassword(auth, email, password);

      toast.success('Account created! Please log in.', toast_config as any);
      push('/');
    } catch (e: any) {
      const { message } = e;

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, register, errors, handleSubmit, isLoading, error };
};

export default useRegister;
