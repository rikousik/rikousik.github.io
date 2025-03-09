

// Section scss
import section from '@/styles/blocks/section.title.module.scss'


export default function SectionTitle({ preTitle, title, subTitle }: { preTitle: string, title: string, subTitle: string }) {
	return (
		<>
			<div className={`${section.title}`}>
				<h4>{preTitle}</h4>
				<h2>{title}</h2>
				<p className="subtitle">{subTitle}</p>
			</div>
		</>
	)

}