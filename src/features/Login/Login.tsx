import {
  Anchor,
  Text
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { AuthWrapper, LoginForm } from "../../components";

export const Login: React.FC = () => {
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
