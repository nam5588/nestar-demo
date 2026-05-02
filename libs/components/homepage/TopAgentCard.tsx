import React from 'react';
import { Stack, Box } from '@mui/material';

const TopAgentCard = () => {
	return (
		<Stack className={'top-agent-card'}>
			<Box className={'agent-img'}>
				<img src={'/img/profile/girl.svg'} alt="agent" />
			</Box>
			<Box className={'agent-info'}>
				<strong>Martin</strong>
				<span>Agent </span>
			</Box>
		</Stack>
	);
};

export default TopAgentCard;