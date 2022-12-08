import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegisterFormWrapper, RegisterHeader, RegisterButton, Form, RegisterInput, RegisterLabel } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

    return (
    <RegisterFormWrapper>
            <RegisterHeader>Please, enter your details</RegisterHeader>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <RegisterLabel >
        Username
        <RegisterInput type="text" name="name" />
      </RegisterLabel>
      <RegisterLabel>
        Email
        <RegisterInput type="email" name="email" />
      </RegisterLabel>
      <RegisterLabel >
        Password
        <RegisterInput type="password" name="password" />
      </RegisterLabel>
      <RegisterButton type="submit">Register</RegisterButton>
    </Form> 
      </RegisterFormWrapper>

  );
};