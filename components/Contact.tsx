import ContactForm from './Form';
import ContactFigure from './figures/ContactFigure';

const Contact = ({ extras }: { extras: TExtras }) => {
	return (
		<section className='contact__section'>
			<div className='form__section'>
				<h1 className='contact--title'>Get In Touch 📬</h1>
				<p className='contact--subtitle'>Let’s create web stuff together !</p>
				<ContactForm />
			</div>
			<section className='contact__socialHub'>
				<ContactFigure image={extras.contact.X1} />
				<div className='contact--gmail'>
					<img src='/images/gmail.svg' alt='Gmail Inbox' title='Gmail Inbox' />
					<p>nilson444diaz@gmail.com</p>
				</div>
			</section>
		</section>
	);
};

export default Contact;
