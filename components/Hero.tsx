'use client';

import Image from 'next/image';
import { CustomButton } from '.';

const Hero = () => {
	const handleScroll = () => {
		const nextSection = document.getElementById('discover');

		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<div className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>
					Your car rental awaits — book effortlessly and swiftly!
				</h1>
				<p className='hero__subtitle'>
					Say hello to ease with our effortless car rental reservations.
				</p>

				<CustomButton
					title='Show me the cars'
					containerStyles='bg-primary-blue text-white rounded-full mt-10'
					handleClick={handleScroll}
				/>
			</div>
			<div className='hero__image-container'>
				<div className='hero__image'>
					<Image src='/hero.png' alt='hero' fill className='object-contain' />
				</div>
				<div className='hero__image-overlay'></div>
			</div>
		</div>
	);
};

export default Hero;
