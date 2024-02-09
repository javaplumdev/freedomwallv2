'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<any> = (data) => onSignin(data);

  const onSignin = (data: any) => {
    setIsLoading(true);

    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, register, errors, handleSubmit, isLoading };
};

export default useLogin;
