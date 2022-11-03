import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsFillTelephoneFill } from 'react-icons/bs';
import { ImCogs } from 'react-icons/im';
import { Link } from 'react-scroll';
import BurgerMenu from './components/BurgerMenu';
import Socials from './components/Socials';
import * as style from './style';

const Navbar = () => {
	return (
		<>
			<BurgerMenu />

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
