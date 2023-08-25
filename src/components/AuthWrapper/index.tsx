import { Center, Container, Title } from "@mantine/core";
import React, { PropsWithChildren } from "react";

interface Props {
  title: string;
  description?: React.ReactNode;
}

const AuthWrapper: React.FC<PropsWithChildren<Props>> = ({
  title,
  description,
  children,
}) => {
  return (
    <Center
      sx={(theme) => ({
        backgroundImage:
          theme.colorScheme === "light"
            ? "linear-gradient(to top, #dfe9f3 0%, white 100%)"
            : "linear-gradient(to top, #1a202c 0%, #2d3748 100%)",
        color: theme.colorScheme === "light" ? theme.colors.dark : theme.white,
        minHeight: "100vh",
      })}
    >
      <Container size="xs" sx={{ paddingBottom: 16, width: 480 }}>
        <Title
          align="center"
          sx={() => ({
            fontSize: 42,
            fontWeight: 900,
          })}
        >
          {title}
        </Title>
        {description}
        {children}
      </Container>
    </Center>
  );
};

export default AuthWrapper;
