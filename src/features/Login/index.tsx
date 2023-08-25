import {
  Anchor,
  Text
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import AuthWrapper from "../../components/AuthWrapper";
import LoginForm from "../../components/LoginForm";

const SignIn: React.FC = () => {
  return (
    <AuthWrapper
      title="Admin"
      description={
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Don&apos;t have an account?{" "}
          {/* TODO: use constants */}
          <Link to="/register">
            <Anchor size="sm">Sign Up</Anchor>
          </Link>
        </Text>
      }
    >
      <LoginForm />
    </AuthWrapper>
  );
};

export default SignIn;
