// Utility scss
import spaces from '../../styles/utils/spacing.module.scss';


export default function Spacing( spacing: string | string[] ) {
	const classes: string[] = [];
	if ( Array.isArray(spacing) ) {
		spacing.forEach( space => {
			classes.push( spaces[space] );
		});
	} else {
		classes.push( spaces[spacing] );
	}
	return classes.join(' ');
}