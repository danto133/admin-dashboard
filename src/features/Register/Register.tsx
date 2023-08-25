import { Anchor, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { AuthWrapper, RegisterForm } from "../../components";

export const Register: React.FC = () => {
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
