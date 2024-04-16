import { Button, Input, Result } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { accentColor, fontColor } from '../../constants/colors';

import Logo from '../../assets/images/TrackItLogo.png';
import styled from 'styled-components';
import { useState } from 'react';

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
  const navigate = useNavigate();

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <SignUp>
      <img src={Logo} alt="TrackIt Logo" />
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
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

        <Input
          type="password"
          placeholder="Confirm Password"
          {...register('password_confirmation', { required: true })}
        />
        {errors.password_confirmation && <span>This field is required</span>}

        <Input
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}

        <Input
          type="text"
          placeholder="Picture URL"
          {...register('picture', { required: true })}
        />
        {errors.picture && <span>This field is required</span>}

        <Button
          htmlType="submit"
          disabled={isSubmitting}
          onClick={() => setRegisterSuccess(true)}>
          Sign Up
        </Button>
      </SignUpForm>
      <p>
        Already registered! <Link to="/">Login Here</Link>
      </p>
      <ResultMask $show={registerSuccess}>
        <div>
          <Result
            status="success"
            title="Registered"
            extra={
              <Button type="primary" key="login" onClick={() => navigate('/')}>
                LogIn Page
              </Button>
            }></Result>
        </div>
      </ResultMask>
    </SignUp>
  );
}

const SignUp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  width: 100vw;
  height: 100vh;
  p {
    color: ${accentColor};
  }
`;

const SignUpForm = styled.form`
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

interface ResultMaskProp {
  $show: boolean;
}

const ResultMask = styled.div<ResultMaskProp>`
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  z-index: 4;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(52, 52, 52, 0.4);
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: fit-content;
    background-color: #ffffff;
    border-radius: 0.5rem;
  }
`;
