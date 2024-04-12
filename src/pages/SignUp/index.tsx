import { SubmitHandler, useForm } from 'react-hook-form';

import Logo from '../../assets/images/TrackItLogo.png';
import styled from 'styled-components';

type Inputs = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
  picture: string;
};

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);

  return (
    <SignUp>
      <img src={Logo} alt="TrackIt Logo" />
      <h1>SignUp Page</h1>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="E-mail"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input
          type="password"
          placeholder="Confirm Password"
          {...register('password_confirmation', { required: true })}
        />
        {errors.password_confirmation && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Picture URL"
          {...register('picture', { required: true })}
        />
        {errors.picture && <span>This field is required</span>}

        <button type="submit" disabled={isSubmitting}>
          Sign Up
        </button>
      </SignUpForm>
    </SignUp>
  );
}

const SignUp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    width: 30vw;
    margin: 7px auto;
    border: 1px solid #d4d4d4;
    border-radius: 0.5rem;
  }
  button {
    width: 30vw;
    margin: 7px auto;
  }
`;
