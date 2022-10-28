import { useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsFillSunFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { ImCogs } from 'react-icons/im';
import { Link } from 'react-scroll';
import { load, save } from './components/localStorage/checkBox';
import { isLight, toggleLocalStorageItem, toggleRootClass } from './components/localStorage/themeColor';
import Socials from './components/Socials';
import * as style from './style';

const Navbar = () => {
	// LOADS LOCAL STORAGE FOR CHECKBOX ON PAGE LOAD
	useEffect(() => {
		load();
	});

	// LOCAL STORAGE FOR COLOR THEME

	if (isLight()) {
		toggleRootClass();
	}

	return (
		<>
			<style.ThemeToggleButton>
				<input
					type='checkbox'
					id='themeToggle'
					style={{ display: 'none' }}
					onClick={() => {
						toggleLocalStorageItem();
						toggleRootClass();
						save();
					}}
				/>
				<label for='themeToggle'>
					<span>
						<BsFillSunFill className='sun' />
						<FaMoon className='moon' />
					</span>
				</label>
			</style.ThemeToggleButton>

			<Socials />

			<style.NavMobile>
				<Link
					to='home'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<AiFillHome />
				</Link>

				<Link
					to='about'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<BsFillPersonLinesFill />
				</Link>

				<Link
					to='projects'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<ImCogs />
				</Link>

				<Link
					to='contact'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<BsFillTelephoneFill />
				</Link>
			</style.NavMobile>

			<style.NavDesktop>
				<style.LinkContainer>
					<Link
						to='home'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<AiFillHome />
						<p>Hjem</p>
					</Link>

					<Link
						to='about'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<BsFillPersonLinesFill />
						<p>Om Meg</p>
					</Link>

					<Link
						to='projects'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<ImCogs />
						<p>Prosjekter</p>
					</Link>

					<Link
						to='contact'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<BsFillTelephoneFill />
						<p>Kontakt Meg</p>
					</Link>
				</style.LinkContainer>
			</style.NavDesktop>
		</>
	);
};

export default Navbar;
