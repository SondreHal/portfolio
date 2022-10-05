import emailjs from "emailjs-com";
import { useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import * as s from "./style";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_pe1wcx5", "template_lp0tj9w", form.current, "q0E_SlrDXBX5jbt8i")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get in touch</h5>
			<h2>Contact Me</h2>

			<s.Container className="container">
				<s.ContactOptions>
					<s.ContactOption>
						<FaPhoneAlt className="icon" />
						<h4>Phone</h4>
						<h5>+47 971 41 688</h5>
					</s.ContactOption>
					<s.ContactOption>
						<IoIosMail className="icon" />
						<h4>Email</h4>
						<a href="mailto:sondre-h@hotmail.com">sondre-h@hotmail.com</a>
					</s.ContactOption>
					<s.ContactOption>
						<SiDiscord className="icon" />
						<h4>Discord</h4>
						<a
							href="https://discordapp.com/users/212315187124895744"
							target="_blank"
							rel="noreferrer noopener"
						>
							Send a message
						</a>
					</s.ContactOption>
				</s.ContactOptions>
				<s.Form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder="Your Full Name" required />
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea name="message" rows="7" placeholder="Your Message" required />
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</s.Form>
			</s.Container>
		</section>
	);
};

export default Contact;

// export default function ContactPage() {
// 	return (
// 		<>
// 			<BsGithub />
// 			<BsLinkedin />
// 		</>
// 		<S.MainContainer>
// 			<S.ContactContainer>
// 				<S.ContactInfoH3>
// 					<S.ContactIcon className="fa-solid fa-phone"></S.ContactIcon>
// 					+47 971 41 688
// 				</S.ContactInfoH3>
// 				<S.ContactInfoA href="mailto:sondre-h@hotmail.com">
// 					<S.ContactIcon className="fa-solid fa-envelope"></S.ContactIcon>
// 					sondre-h@hotmail.com
// 				</S.ContactInfoA>
// 				<S.ContactInfoA
// 					href="https://github.com/SondreHal"
// 					target="_blank"
// 					rel="noreferrer noopener"
// 				>
// 					<S.ContactIcon className="fa-brands fa-github"></S.ContactIcon>
// 					GitHub
// 				</S.ContactInfoA>
// 				<S.ContactInfoA
// 					href="https://www.linkedin.com/in/sondre-halvorsen-74a453241/"
// 					target="_blank"
// 					rel="noreferrer noopener"
// 				>
// 					<S.ContactIcon className="fa-brands fa-linkedin"></S.ContactIcon>
// 					LinkedIn
// 				</S.ContactInfoA>
// 			</S.ContactContainer>
// 			<S.ContactContainer className="contact-container-2">
// 				<S.ContactInfoA
// 					href="https://discordapp.com/users/212315187124895744"
// 					target="_blank"
// 					rel="noreferrer noopener"
// 				>
// 					<S.ContactIcon className="fa-brands fa-discord"></S.ContactIcon>
// 					Discord
// 				</S.ContactInfoA>
// 			</S.ContactContainer>
// 		</S.MainContainer>
// 	);
// }
