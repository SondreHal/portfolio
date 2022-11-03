import CV from '../../../../../assets/cv.pdf';
import * as style from '../style';

const CTA = () => {
	return (
		<>
			<style.CTAButtons>
				<a
					href={CV}
					target='_blank'
					rel='noreferrer'
					className='btn btn-primary'
				>
					Åpne CV
				</a>
				{/* <a
					href='#contact'
					className='btn btn-primary'
				>
					Kom i kontakt
				</a> */}
			</style.CTAButtons>
		</>
	);
};

export default CTA;
