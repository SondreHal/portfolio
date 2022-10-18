import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Content = styled.div`
	& .skills {
		/*Display stuff*/
		display: none;
		/*Box model stuff*/
		margin: 2rem 0 2.6rem;
		/*Typography stuff*/
		color: var(--color-light);
		/*Manipulations stuff*/
		transition: var(--transition);

		&.activeText {
			/*Display stuff*/
			display: flex;
			flex-direction: column;
		}

		& .skill_scale {
			margin-left: 2.5rem;
			margin-bottom: 0;
			width: 80%;
			justify-content: space-between;
			display: flex;
		}

		& .skill {
			display: flex;
			gap: 1rem;
			align-items: center;
			margin-bottom: 1rem;

			& .icon {
				vertical-align: middle;
				display: flex;
				flex-direction: column;
				font-size: 1.5rem;
				width: fit-content;
			}

			& .html {
				color: #e44d26;
			}

			& .css {
				color: #2965f1;
			}

			& .js {
				color: #f7df1e;
			}

			& .react {
				color: #60d8f9;
			}

			& .skill_bar_bg {
				background-color: var(--color-bg-variant);
				height: 0.8rem;
				width: 80%;
				border-radius: 100px;

				& .skill_bar_html {
					background: linear-gradient(90deg, #e44d26, #e47826);
					height: 100%;
					width: 45%;

					border-radius: inherit;
					animation: extendHtml 1s;
				}

				& .skill_bar_css {
					background: linear-gradient(90deg, #2965f1, #39bdff);
					height: 100%;
					width: 55%;

					border-radius: inherit;
					animation: extendCss 1s;
				}

				& .skill_bar_js {
					background: linear-gradient(90deg, #f7df1e, #ffeb52);
					height: 100%;
					width: 35%;

					border-radius: inherit;
					animation: extendJs 1s;
				}

				& .skill_bar_react {
					background: linear-gradient(90deg, #60d8f9, #95e8ff);
					height: 100%;
					width: 55%;

					border-radius: inherit;
					animation: extendReact 1s;
				}

				@keyframes extendHtml {
					0% {
						width: 0%;
					}
					100% {
						width: 45%;
					}
				}

				@keyframes extendCss {
					0% {
						width: 0%;
					}
					100% {
						width: 55%;
					}
				}

				@keyframes extendJs {
					0% {
						width: 0%;
					}
					100% {
						width: 35%;
					}
				}

				@keyframes extendReact {
					0% {
						width: 0%;
					}
					100% {
						width: 55%;
					}
				}
			}
		}

		& .skill__react {
			margin-bottom: initial;
		}

		@media ${deviceSize.medium} {
			/*Box model stuff*/
			margin: 1rem 0 1.5rem;
		}

		@media ${deviceSize.small} {
			/*Box model stuff*/
			margin: 1.5rem 0;
		}
	}
	@media ${deviceSize.small} {
		/*Typography stuff*/
		text-align: center;
	}
`;

export const Container = styled.div`
	/*Display stuff*/
	display: grid;
	grid-template-columns: 35% 1fr;
	/*Miscellaneous*/
	gap: 15%;

	@media ${deviceSize.medium} {
		/*Display stuff*/
		grid-template-columns: 1fr;
		/*Miscellaneous*/
		gap: 0;
	}
`;

export const AboutMe = styled.div`
	/*Display stuff*/
	display: grid;
	/*Box model stuff*/
	width: 100%;
	border-radius: 2rem;
	background: linear-gradient(-45deg, transparent, var(--color-primary), transparent);
	/*Miscellaneous*/
	aspect-ratio: 1/1;
	place-items: center;

	@media ${deviceSize.medium} {
		/*Box model stuff*/
		width: 50%;
		margin: 2rem auto 4rem;
	}

	@media ${deviceSize.small} {
		/*Box model stuff*/
		width: 65%;
		margin: 0 auto 3rem;
	}
`;

export const AboutMeImage = styled.div`
	/*Box model stuff*/
	border-radius: 2rem;
	/*Manipulations stuff*/
	transform: rotate(-8deg);
	transition: var(--transition);
	/*Miscellaneous*/
	overflow: hidden;

	&:hover {
		/*Manipulations stuff*/
		transform: rotate(0);
		/*Miscellaneous*/
		box-shadow: 0px 0px 40px var(--color-primary);
	}
`;

export const AboutCards = styled.div`
	/*Display stuff*/
	display: grid;
	grid-template-columns: repeat(auto-fit, 200px);
	/*Miscellaneous*/
	gap: 1.5rem;

	@media ${deviceSize.small} {
		/*Display stuff*/
		grid-template-columns: 1fr 1fr;
		/*Miscellaneous*/
		gap: 1rem;
	}
`;

export const AboutCard = styled.article`
	/*Box model stuff*/
	padding: 2rem;
	border: var(--border) solid var(--color-primary-variant);
	border-radius: 1rem;
	background-color: var(--color-bg-variant);
	/*Typography stuff*/
	text-align: center;
	/*Manipulations stuff*/
	transition: var(--transition);

	&:hover {
		/*Box model stuff*/
		border-color: var(--color-bg-variant);
		background-color: var(--color-primary);
		/*Miscellaneous*/
		cursor: pointer;

		& .icon {
			/*Typography stuff*/
			color: var(--color-bg);
		}

		& small {
			/*Typography stuff*/
			color: var(--color-bg);
		}
	}

	&.active {
		/*Box model stuff*/
		border-color: var(--color-primary);
		background-color: transparent;
		/*Miscellaneous*/
		cursor: initial;

		& .icon {
			/*Typography stuff*/
			color: var(--color-primary);
		}

		& small {
			/*Typography stuff*/
			color: var(--color-light);
		}
	}

	& h5 {
		/*Typography stuff*/
		font-size: 0.95rem;
	}

	& small {
		/*Typography stuff*/
		font-size: 0.7rem;
		color: var(--color-light);
	}

	& .icon {
		/*Box model stuff*/
		margin-bottom: 1rem;
		/*Typography stuff*/
		font-size: 1.4rem;
		color: var(--color-primary);
	}
`;