import { Button, Input } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { accentColor, fontColor } from '../../constants/colors';

import { Link } from 'react-router-dom';
import Logo from '../../assets/images/TrackItLogo.png';
import styled from 'styled-components';

type Inputs = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <SignIn>
      <img src={Logo} alt="TrackIt Logo" />
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="E-mail"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <Input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <Button htmlType="submit" disabled={isSubmitting}>
          Sign In
        </Button>
      </SignInForm>
      <p>
        Not registered yet? <Link to="/SignUp">Register here</Link>
      </p>
    </SignIn>
  );
}

const SignIn = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-bottom: 10rem;
  p {
    color: ${accentColor};
  }
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  Input {
    width: 80vw;
    margin: 7px auto;
    border: 1px solid #d4d4d4;
    border-radius: 0.3rem;
    color: ${fontColor};
    ::placeholder {
      color: #dbdbdb;
    }
  }
  Button {
    width: 80vw;
    margin: 7px auto;
    border: 0;
    border-radius: 0.3rem;
    background-color: ${accentColor};
  }
`;
