import React from 'react'
import styles from './styles.module.css'
import { HyperlinkButton, TitleBlock } from '../../lib'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom'

interface Control {
	title: string
	category: string
}

interface FooterProps {
	sourcePageCodeURL: {
		componentType: string
		componentName: string
	}
	relatedControls: Control[]
}

// https://github.com/movpushmov/winui-react-controls-gallery/blob/main/src/pages/BasicInput/ButtonPage/ButtonPage.tsx

export const Footer = (props: FooterProps): React.ReactElement => {
	const { t } = useTranslation()

	return (
		<div className={styles['footer-container']}>
			<div>
				<TitleBlock>
					{t('footer.sourcePage.title')}
				</TitleBlock>

				<HyperlinkButton className={styles['link']}>
					<a
						target="_blank"
						rel="noreferrer"
						href={`https://github.com/movpushmov/winui-react-controls-gallery/blob/main/src/pages/${
							props.sourcePageCodeURL.componentType
						}/${props.sourcePageCodeURL.componentName}/${props.sourcePageCodeURL.componentName}Page.tsx`}
					>
						{t('footer.sourcePage.desc')}
					</a>
				</HyperlinkButton>
			</div>

			<div>
				<TitleBlock>
					{t('footer.relatedControls')}
				</TitleBlock>

				{props.relatedControls.map((control, index) =>
					<HyperlinkButton key={index} className={styles['link']}>
						<Link to={`/${control.category}/${control.title}`}>
							{control.title}
						</Link>
					</HyperlinkButton>,
				)}
			</div>

			<div>
				<TitleBlock>
					{t('footer.feedback.title')}
				</TitleBlock>

				<HyperlinkButton className={styles['link']}>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/movpushmov/winui-react-controls-gallery/issues/new/choose"
					>
						{t('footer.feedback.desc')}
					</a>
				</HyperlinkButton>
			</div>
		</div>
	)
}

