import React from 'react'
import { TextBlock, TitleBlock } from '../../../lib'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { useTranslation } from 'react-i18next'

export const SliderPage: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>Slider</TitleBlock>
			<TextBlock>{t('BasicInput.Slider.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.SplitButton.samples.with_text.title')}
				code={''}
			>
			</CodeExample>
		</div>
	)
}

