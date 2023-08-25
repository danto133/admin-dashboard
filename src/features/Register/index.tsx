import { Anchor, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import AuthWrapper from "../../components/AuthWrapper";
import RegisterForm from "../../components/RegisterForm";

const SignIn: React.FC = () => {
  return (
    <AuthWrapper
      title="Admin"
      description={
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?
          {/* TODO: use constants */}
          <Link to="/login">
            <Anchor size="sm">Sign In</Anchor>
          </Link>
        </Text>
      }
    >
      <RegisterForm />
    </AuthWrapper>
  );
};

export default SignIn;
