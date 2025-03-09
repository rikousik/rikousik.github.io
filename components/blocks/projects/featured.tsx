import Image from 'next/image'

import { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import Badges from '@/components/utils/badge.list.util'
import css from '@/styles/sections/projects/featured.module.scss'
import { LogIn } from "lucide-react";
import { Project } from '@/components/models/project'

export default function FeaturedProject({ content, index }: {
	content: Project,
	index: number
}) {

	const { project, repo, descriptionTitle, description, stack, images } = content;

	const controls = useAnimation();
	const { ref, inView } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect(() => {
		if (inView) { controls.start("visible") }
		if (!inView) { controls.start("hidden") }
	}, [controls, inView])

	return (
		<m.section
			key={index}
			className={css.project}
			//framer-motion
			ref={ref}
			variants={container}
			initial="visible"
			whileHover="hover"
			animate={controls} >

			<div className={css.details}>
				<div className={css.projectHeader}>
					<div className={css.header}>
						<h3 className="highlight">{project}</h3><span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span>
					</div>
					<div className={css.description}>
						<p><strong>{descriptionTitle}</strong> {description}</p>
					</div>
					<div className={css.stackContainer}>
						<Badges list={stack} block="stack" fullContainer={false} color={false} />
					</div>
					<m.div className={css.viewProject}>
						<LogIn />
					</m.div>
				</div>
			</div>

			<div className={css.imageContainer}>
				<span className={`${css.imageAnimationContainer}`}>
					{images.map(({ key, url, hover, h, w }, index) => {
						const hoverData = (hover === 'left') ? hoverLeft : hoverRight
						return (
							<m.div key={`${index}-${key}`} variants={item}>
								<m.div variants={hoverData} >
									<Image src={url} alt="x" height={Number(h)} width={Number(w)} />
								</m.div>
							</m.div>
						)
					}
					)}
				</span>
			</div>
		</m.section>
	)
}

const container = {
	hidden: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625
		}
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		}
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	}
}

const item = {
	hidden: {
		y: 75,
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: .35,
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: .5,
		}
	},
}

const hoverLeft = {
	rest: {
		x: 0
	},
	hover: {
		x: -20
	}
}

const hoverRight = {
	rest: {
		x: 0
	},
	hover: {
		x: 20
	}
}

