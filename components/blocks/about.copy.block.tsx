// Util packages

import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'
import Icon from '../utils/icon.util'
// Utility packages


export default function CopyBlock({ containerClass, iconClass, icon, title, copy }:{
	containerClass: string,
	iconClass: string,
	icon: [IconPrefix, IconName],
	title: string,
	copy: string
}) {
	return (
		<>
		<div className={containerClass}>
			<span className={iconClass}>
			<Icon icon={icon} />
			</span>
			<h3>{title}</h3>
			<p>
				{copy}
			</p>
		</div>
		</>
	)
}