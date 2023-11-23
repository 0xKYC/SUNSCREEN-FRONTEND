import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { isCompanyEmail } from 'utils/email-validator/validateEmail';
import { media } from 'utils/media';
import { Checkmark } from './Checkmark';
import Input from './Input';
import { Spinner } from './Spinner';

interface InputProps {
  invalid: boolean;
}
interface FormValue {
  email: string;
}
export const NewsletterBox = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState, setError } = useForm<FormValue>();
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit: SubmitHandler<FormValue> = async ({ email }) => {
    const isValid = isCompanyEmail(email);
    if (!isValid) {
      return setError('email', { message: 'Invalid email address' });
    }
    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL!}/user/newsletter/signup`,
        {
          email,
        },
        { withCredentials: true },
      );
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setError('email', { message: 'Error has occurred. Try again' });
    }
  };

  return (
    <NewsletterWrapper>
      {isSubmitSuccessful && !isLoading ? (
        <SuccessBox>
          <Checkmark />
          <LargeText>Congratulations!</LargeText>
          <SmallText>Your subscription to our newsletter has been confirmed.</SmallText>
        </SuccessBox>
      ) : (
        <>
          <Text>Subscribe to our updates</Text>
          <InfoText>Stay in the loop! </InfoText>
          <Flex>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <StyledInput
                  autoComplete="email"
                  invalid={Boolean(errors.email)}
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                    maxLength: 100,
                  })}
                  title="Type your email here"
                />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                {errors.email && errors.email.type === 'maxLength' && <ErrorMessage>Max length exceeded</ErrorMessage>}
              </Box>
              <StyledButton disabled={isLoading}>
                {isLoading && <Spinner />}
                {isLoading ? 'Loading' : 'Sign up'}
                {!isLoading && <Arrow>&rarr;</Arrow>}
              </StyledButton>
            </FormWrapper>
          </Flex>
        </>
      )}
    </NewsletterWrapper>
  );
};
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Arrow = styled.span`
  margin-left: 5px;
  @media screen and (max-width: 1224px) {
    display: none;
  }
`;
const NewsletterWrapper = styled.div`
  flex: 0.8;
  border-radius: 1rem;
  text-align: center;
  background-color: white;
  margin-right: 5rem;
  padding: 4rem 2rem;
  color: black;

  ${media('<=desktop')} {
    margin: 7rem 0 0 0;
    order: 1;
    max-width: 600px;
  }
`;

const FormWrapper = styled.form`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  margin-top: 1rem;

  ${media('<=desktop')} {
    padding: 0;
  }
`;

const SuccessBox = styled.div`
  height: 100%;
  margin-top: 1rem;
  padding: 1rem 2rem;
  ${media('<=desktop')} {
    padding: 1rem;
    padding: 3rem;
  }
  ${media('<=tablet')} {
    padding: 3rem;
  }
`;
const ErrorMessage = styled.p`
  /* color: #ffa07a; */
  color: red;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-left: 0.3rem;
  text-align: left;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const InfoText = styled.p`
  font-size: 1.3rem;
  opacity: 0.8;
  margin-bottom: 3rem;
`;

const LargeText = styled.p`
  font-size: 1.5rem;
  opacity: 0;
  animation: show linear forwards 0.8s 0.8s;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SmallText = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  opacity: 0;
  animation: show linear forwards 0.8s 0.8s;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const StyledInput = styled(Input)<InputProps>`
  padding: 1rem;
  width: 100%;
  height: 46px;
  font-size: 1.3rem;
  border: 1px solid ${(props) => (props.invalid ? 'red' : 'rgb(45, 55, 72)')};
  &:focus {
    outline: none;
    box-shadow: var(--shadow-lg);
    border: 1px solid ${(props) => (props.invalid ? 'red' : 'rgb(45, 55, 72)')};
  }
  ::placeholder {
    color: #8c92ac;
  }
`;

const Text = styled.p`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  background: rgb(var(--primary));
  padding: 1rem 2.2rem;
  margin-left: 1.3rem;
  height: 46px;
  font-size: 1.3rem;
  color: rgb(var(--textSecondary));
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  border: 2px solid rgb(var(--primary));
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }

  ${media('<=tablet')} {
    padding: 0;
  }
`;
