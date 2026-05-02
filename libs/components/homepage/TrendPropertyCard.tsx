import React from 'react';
import { Stack, Box } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const TrendPropertyCard = () => {
	return (
		<Stack className={'trend-card-box'}>
			<Box
				className={'card-img'}
				style={{ backgroundImage: `url(/img/banner/header1.svg)` }}
			>
				<div>$90,000</div>
			</Box>
			<Box className={'info'}>
				<strong className={'title'}>Modern Family Home</strong>
				<p className={'desc'}>Seoul, South Korea</p>
				<Box className={'options'}>
					<div>
						<img src={'/img/icons/bed.svg'} alt="bed" />
						<span>1 beds</span>
					</div>
					<div>
						<img src={'/img/icons/room.svg'} alt="room" />
						<span>2 rooms</span>
					</div>
					<div>
						<img src={'/img/icons/expand.svg'} alt="size" />
						<span>50 m²</span>
					</div>
				</Box>
				<Box className={'bott'}>
					<p>For rent</p>
					<Box className={'view-like-box'}>
						<RemoveRedEyeIcon fontSize={'small'} />
						<span className={'view-cnt'}>90</span>
						<button>
							<FavoriteBorderIcon fontSize={'small'} />
						</button>
					</Box>
				</Box>
			</Box>
		</Stack>
	);
};

export default TrendPropertyCard;