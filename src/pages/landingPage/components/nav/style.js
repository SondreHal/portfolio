import styled, { keyframes } from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    KEYFRAMES ANIMATIONS
//
////////////////////////////////////////////////////////////////////////////////////////////
const menuOpenLine1 = keyframes`
0% {
	transform: none;
	width: 100%;
	top: 0;
}
50% {
	transform: none;
	width: 0;
	top: 0.5rem;
}
51% {
	transform: rotate(45deg);
	width: 0;
	top: 0.5rem;
}
100% {
	transform: rotate(45deg);
	width: 100%;
	top: 0.5rem;
}
`;

const menuOpenLine2 = keyframes`
0% {
	width: 100%;
	top: 0.5rem;
}
50% {
	width: 0%;
	top: 0.5rem;
}
100% {
	width: 0%;
	top: 0.5rem;
}
`;

const menuOpenLine3 = keyframes`
0% {
	transform: none;
	width: 100%;
	top: 1rem;
}
50% {
	transform: none;
	width: 0;
	top: 0.5rem;
}
51% {
	transform: rotate(-45deg);
	width: 0;
	top: 0.5rem;
}
100% {
	transform: rotate(-45deg);
	width: 100%;
	top: 0.5rem;
}
`;

const menuCloseLine1 = keyframes`
0%{
	transform: rotate(45deg);
	width: 100%;
	top: 0.5rem;
}
50% {
	transform: rotate(45deg);
	width: 0;
	top: 0.5rem;
}
51% {
	transform: rotate(0);
	width: 0.5rem;
	top: 0.5rem;
}
100% {
	transform: rotate(0);
	width: 100%;
	top: 0;
}
`;

const menuCloseLine2 = keyframes`
0%{
	width: 0;
	top: 0.5rem;
}
50% {
	width: 0;
	top: 0.5rem;
}
51% {
	width: 0;
	top: 0.5rem;
}
100% {
	width: 100%;
	top: 0.5rem;
}
`;

const menuCloseLine3 = keyframes`
0% {
	transform: rotate(-45deg);
	width: 100%;
	top: 0.5rem;
}
50% {
	transform: rotate(-45deg);
	width: 0;
	top: 0.5rem;
}
51% {
	transform: rotate(0);
	width: 0;
	top: 0.5rem;
}
100% {
	transform: rotate(0);
	width: 100%;
	top: 1rem;
}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    HAMBURGER MENU
//
////////////////////////////////////////////////////////////////////////////////////////////
export const burgerMenuContainer = styled.div`
	width: 1.6rem;
	height: 1.2rem;
	position: fixed;
	display: flex;
	top: 2rem;
	left: 1.5rem;
	justify-content: center;

	&:hover {
		cursor: pointer;
	}
`;

export const line1 = styled.div`
	height: 0.2rem;
	border-radius: 2rem;
	background: white;
	position: absolute;
	z-index: 1;

	&.open {
		animation: ${menuOpenLine1} 0.4s forwards;
	}
	&.closed {
		animation: ${menuCloseLine1} 0.4s forwards;
	}
`;

export const line2 = styled.div`
	height: 0.2rem;
	border-radius: 2rem;
	background: white;
	position: absolute;

	&.open {
		animation: ${menuOpenLine2} 0.4s forwards;
	}
	&.closed {
		animation: ${menuCloseLine2} 0.4s forwards;
	}
`;

export const line3 = styled.div`
	height: 0.2rem;
	border-radius: 2rem;
	background: white;
	position: absolute;

	&.open {
		animation: ${menuOpenLine3} 0.4s forwards;
	}
	&.closed {
		animation: ${menuCloseLine3} 0.4s forwards;
	}
`;

export const menu = styled.div`
	position: fixed;
	top: 3.8rem;
	left: 0;
	padding-inline: 1rem;
	border: 1px solid white;
	translate: calc(-100%);
	transition: var(--transition);

	&.open {
		translate: initial;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    SOCIALS
//
////////////////////////////////////////////////////////////////////////////////////////////
export const SocialsLinks = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	align-items: center;
	/*Positioning stuff*/
	position: fixed;
	right: 2rem;
	bottom: 3rem;
	/*Typography stuff*/
	font-size: 1.5rem;
	/*Miscellaneous*/
	gap: 0.8rem;

	&:before {
		/*Display stuff*/
		content: '';
		/*Box model stuff*/
		width: 1px;
		height: 2rem;
		background: var(--color-primary);
	}

	&:after {
		/*Display stuff*/
		content: '';
		/*Box model stuff*/
		width: 1px;
		height: 2rem;
		background: var(--color-primary);
	}

	@media ${deviceSize.tablet} {
		/*Display stuff*/
		display: none;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    MOBILE
//
////////////////////////////////////////////////////////////////////////////////////////////
export const NavMobile = styled.nav`
	/*Display stuff*/
	display: none;
	/*Positioning stuff*/
	position: fixed;
	left: 50%;
	bottom: 1rem;
	z-index: 1;
	/*Box model stuff*/
	padding: 0.7rem 0.8rem;
	border-radius: 2rem;
	background: rgba(0, 0, 0, 0.3);
	/*Manipulations stuff*/
	transform: translateX(-50%);
	/*Miscellaneous*/
	gap: 0.8rem;
	backdrop-filter: blur(10px);

	& a {
		/*Display stuff*/
		display: flex;
		/*Box model stuff*/
		padding: 0.9rem;
		border-radius: 2rem;
		/*Typography stuff*/
		font-size: 1.1rem;
	}

	& .active {
		/*Box model stuff*/
		background: var(--color-primary-variant);
		/*Typography stuff*/
		color: var(--color-white);
	}

	@media ${deviceSize.tablet} {
		/*Display stuff*/
		display: flex;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    DESKTOP
//
////////////////////////////////////////////////////////////////////////////////////////////
export const NavDesktop = styled.nav`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	align-items: center;
	/*Positioning stuff*/
	position: fixed;
	left: 1rem;
	bottom: 3rem;
	/*Miscellaneous*/
	gap: 0.8rem;

	&:before {
		/*Display stuff*/
		content: '';
		/*Box model stuff*/
		width: 1px;
		height: 2rem;
		background: var(--color-primary);
	}

	&:after {
		/*Display stuff*/
		content: '';
		/*Box model stuff*/
		width: 1px;
		height: 2rem;
		background: var(--color-primary);
	}

	@media ${deviceSize.tablet} {
		/*Display stuff*/
		display: none;
	}
`;

export const LinkContainer = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Box model stuff*/
	padding: 0.7rem 0.5rem;
	border-radius: 2rem;
	/*Miscellaneous*/
	gap: 0.8rem;
	/* transition: var(--transition); */

	& a {
		/*Display stuff*/
		display: flex;
		align-items: center;
		/*Box model stuff*/
		padding: 0.9rem;
		border-radius: 2rem;
		/*Typography stuff*/
		font-size: 1.3rem;
		/*Manipulations stuff*/
		/*Miscellaneous*/
		gap: 0.8rem;
		cursor: pointer;

		& p {
			/*Display stuff*/
			display: none;
			/*Positioning stuff*/
			position: absolute;
			left: 4rem;
			/*Typography stuff*/
			font-size: 1rem;
			color: var(--color-primary);
			/*Miscellaneous*/
			white-space: nowrap;
			backdrop-filter: blur(5px);
		}

		&:hover {
			/*Box model stuff*/
			background: var(--color-bg-contrast);

			& p {
				/*Display stuff*/
				display: initial;
				/*Typography stuff*/
				color: var(--color-primary);
				/*Manipulations stuff*/
				opacity: 1;
			}
		}

		&.active {
			/*Box model stuff*/
			background: var(--color-primary-variant);
			/*Typography stuff*/
			color: var(--color-white);
		}

		& p {
			/*Positioning stuff*/
			position: absolute;
			left: 4.5rem;
			/*Typography stuff*/
			font-size: 1rem;
			color: var(--color-primary);
			/*Manipulations stuff*/
			transition: var(--transition);
			opacity: 0;
			/*Miscellaneous*/
			white-space: nowrap;
			backdrop-filter: blur(5px);
		}
	}
`;
