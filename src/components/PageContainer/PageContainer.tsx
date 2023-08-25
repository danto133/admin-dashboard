import {
	Anchor,
	Breadcrumbs,
	Container,
	ContainerProps,
	Space,
	Title,
	useMantineTheme,
} from '@mantine/core';
import React, { PropsWithChildren } from 'react';

type PageContainerProps = {
	title: string;
	items?: { label: string; href: string }[];
} & Pick<ContainerProps, 'fluid'>;

export const PageContainer: React.FC<PropsWithChildren<PageContainerProps>> = ({
	children,
	title,
	items,
	fluid = true,
}) => {
	const theme = useMantineTheme();
	const titleColor = theme.colorScheme === 'dark' ? 'gray' : 'dark';

	return (
		<Container px={0} fluid={fluid}>
			{items && items.length > 0 ? (
				<Breadcrumbs>
					{items.map(item => (
						<Anchor key={item.label} href={item.href}>
							{item.label}
						</Anchor>
					))}
				</Breadcrumbs>
			) : null}

			<Title order={4} color={titleColor}>
				{title}
			</Title>

			<Space h="lg" />

			{children}
		</Container>
	);
};
