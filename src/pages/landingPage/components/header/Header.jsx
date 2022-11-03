import { useState } from 'react';
import CTA from './components/CTA';
import letterArray from './components/letterArray';
import ThemeToggle from './components/ThemeToggle';
import * as style from './style';

const Header = () => {
	const [isHovering, setIsHovering] = useState({
		S: false,
		o: false,
		n: false,
		d: false,
		r: false,
		e: false,
		'!': false,
	});

	const handleMouseOver = (e) => {
		let letter = e.target.id;
		setIsHovering((olderValue) => ({
			...olderValue,
			[letter]: true,
		}));

		setTimeout(() => {
			setIsHovering((olderValue) => ({
				...olderValue,
				[letter]: false,
			}));
		}, 500);
	};

	return (
		<>
			<style.Main id='home'>
				<div className='container'>
					<style.ThemeContainer>
						<ThemeToggle />
						<CTA />
					</style.ThemeContainer>

					<h5>
						{/* Hi, I'm */}
						Hei, mitt navn er
					</h5>

					<h1>
						<style.HoverCard>Hover me!</style.HoverCard>
						{letterArray.map((letter, key) => {
							return (
								<style.LetterEffect
									key={key}
									className={isHovering[letter] ? 'hovered' : ''}
									onMouseOver={handleMouseOver}
									id={letter}
								>
									{letter}
								</style.LetterEffect>
							);
						})}
					</h1>

					<h5 className='text-light'>
						{/* Frontend developer student from Norway! */}
						Frontend utvikler student fra Norge
					</h5>

					{/* <CTA /> */}

					<style.MeImg>
						<img
							src='https://ik.imagekit.io/sondre/tr:w-416/Portfolio/sondre.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667296671770'
							alt='Sondre Halvorsen'
						/>
					</style.MeImg>
				</div>
			</style.Main>
		</>
	);
};
export default Header;
