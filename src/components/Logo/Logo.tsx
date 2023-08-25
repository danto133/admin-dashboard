import { Avatar, Flex } from "@mantine/core";
import { Link } from "react-router-dom";

interface LogoProps {
  width?: string;
  height?: string;
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <Flex direction="row" align="center" gap={4}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Avatar
          radius="xl"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Link>
    </Flex>
  );
};
