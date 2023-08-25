import { Flex, Text, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';

interface LogoProps {
	width?: string;
	height?: string;
}

export const Logo: React.FC<LogoProps> = () => {
	const theme = useMantineTheme();
	return (
		<Flex direction="row" align="center" gap={4}>
			<Link to="/" style={{ textDecoration: 'none' }}>
				<Text
					color={theme.colorScheme === 'light' ? 'dark' : 'white'}
					fw="bolder"
					size="xl"
				>
					Mantine
					<Text component="span" fw="normal" c="gray">
						Admin
					</Text>
				</Text>
			</Link>
		</Flex>
	);
};
