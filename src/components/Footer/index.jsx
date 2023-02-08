import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} 6b6169736569
			<small className={Styles.byline}>🚀 Built by Astro</small>
		</footer>
	);
}
export default Footer;
