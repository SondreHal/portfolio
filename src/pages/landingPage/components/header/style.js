import styled, { keyframes } from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    KEYFRAMES ANIMATIONS
//
////////////////////////////////////////////////////////////////////////////////////////////
const tiltShaking = keyframes`
		0% {
			transform: translate(0, 0) rotate(0deg);
			scale: 1;
		}
		25% {
			transform: translate(5px, -8px) rotate(5deg);
			scale: 1.2;
		}
		50% {
			scale: 1.4;
		}
		75% {
			transform: translate(-5px, -8px) rotate(-5deg);
			scale: 1.2;
		}
		100% {
			transform: translate(0, 0) rotate(0deg);
			scale: 1;

		}
	`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    MAIN
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Main = styled.main`
	/*Box model stuff*/
	min-height: 100vh;

	padding-top: 7rem;

	@media ${deviceSize.mobile} {
		/*Box model stuff*/
		padding-top: 1rem;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    HOVER EFFECT
//
////////////////////////////////////////////////////////////////////////////////////////////
export const HoverCard = styled.div`
	/*Positioning stuff*/
	position: absolute;
	left: -3.6rem;
	top: 0.3rem;
	/*Box model stuff*/
	padding: 0.5em;
	border: var(--border) solid var(--color-primary);
	border-radius: 0.5rem;
	/*Typography stuff*/
	font-size: 0.8rem;
	/*Manipulations stuff*/
	transform: rotate(-25deg);
	/*Miscellaneous*/
	box-shadow: 0px 0px 10px var(--color-primary);

	@media ${deviceSize.tablet} {
		/*Display stuff*/
		display: none;
	}
`;

export const LetterEffect = styled.span`
	/*Display stuff*/
	display: inline-block;
	/*Manipulations stuff*/
	transition: all 500ms ease;
	/*Miscellaneous*/
	cursor: default;

	&.hovered {
		/*Typography stuff*/
		color: var(--color-primary);
		/*Manipulations stuff*/
		animation: ${tiltShaking} 0.5s;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    LIGHT & DARK THEME TOGGLE BUTTON
//
////////////////////////////////////////////////////////////////////////////////////////////
export const ThemeContainer = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	top: 2rem;
	right: 12rem;
	gap: 1rem;
`;

export const ThemeToggleButton = styled.div`
	/*Positioning stuff*/
	/* position: fixed; */
	right: 20rem;
	top: 2rem;

	& label {
		/*Display stuff*/
		display: flex;
		align-items: center;
		justify-content: space-between;
		/*Miscellaneous*/
		cursor: pointer;

		& .moon {
			/*Positioning stuff*/
			position: relative;
			/*Box model stuff*/
			width: 50px;
			height: 26px;
			color: var(--color-white);
			border-radius: 15px;
			/*Miscellaneous*/
			padding-inline: 0.3rem;
		}
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    CTA BUTTONS
//
////////////////////////////////////////////////////////////////////////////////////////////
export const CTAButtons = styled.div`
	/*Display stuff*/
	/* display: flex; */
	/* position: absolute; */
	/* justify-content: center; */
	/*Box model stuff*/
	top: 2rem;
	right: 12rem;
	/*Miscellaneous*/
	gap: 1.2rem;

	& a {
		padding: 0.2rem 1rem;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    IMG
//
////////////////////////////////////////////////////////////////////////////////////////////
export const MeImg = styled.div`
	/*Box model stuff*/
	width: min(26rem, 100%);
	height: min(30rem, auto);
	margin-top: 4rem;
	padding: 3rem 1.5rem 0 1.5rem;
	border-radius: 0 10rem 0 0;
	background: linear-gradient(var(--color-primary), transparent);
	/*Miscellaneous*/
	margin-inline: auto;
	overflow: hidden;

	& img {
		/*Miscellaneous*/
		mask-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.3)
		);
	}
`;
