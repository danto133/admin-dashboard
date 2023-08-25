import {
  Paper,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";

export const LoginForm: React.FC = () => {
  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <TextInput label="Email" placeholder="test@example.com" required />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        required
        mt="md"
      />
      <Group position="apart" mt="md">
        <Checkbox label="Remember me" />
        <Anchor size="sm" href="#">
          Forgot Password?
        </Anchor>
      </Group>
      <Button fullWidth mt="xl" onClick={() => alert("Success")}>
        Sign In
      </Button>
    </Paper>
  );
};
