import { AuthBar, AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthBar>
      <AuthLink to="/register">
        Register
      </AuthLink>
      <AuthLink to="/login">
        Log In
      </AuthLink>
    </AuthBar>
  );
};