import React, { useCallback, useState } from 'react'
import { CheckBox, CheckBoxState, HyperlinkButton, TextBlock, TitleBlock } from '../../../lib'
import { useTranslation } from 'react-i18next'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { Footer } from '../../../components/Footer/Footer'

const HyperLinkButtonExample = (disabled: boolean, content: string): string => `
<HyperlinkButton${disabled ? ' disabled' : ''}>
    <a href="/">
        ${content}
    </a>
</HyperlinkButton>
`

export const HyperlinkButtonPage = (): React.ReactElement => {
	const { t } = useTranslation()
	const [state, setState] = useState(CheckBoxState.Unchecked)

	const checkBoxCheckedHandler = useCallback((checkBoxState: CheckBoxState) => {
		setState(checkBoxState)
	}, [])

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>HyperlinkButton</TitleBlock>
			<TextBlock>{t('BasicInput.HyperlinkButton.long_desc')}</TextBlock>

			<CodeExample
				code={HyperLinkButtonExample(
					state === CheckBoxState.Checked,
					t('BasicInput.HyperlinkButton.samples.uri.content'),
				)}
				title={t('BasicInput.HyperlinkButton.samples.uri.title')}
				rightBlock={(
					<CheckBox
						content={t('BasicInput.HyperlinkButton.samples.uri.checkbox')}
						onCheck={checkBoxCheckedHandler}
					/>
				)}
			>
				<HyperlinkButton disabled={state === CheckBoxState.Checked}>
					<a href="/">
						{t('BasicInput.HyperlinkButton.samples.uri.content')}
					</a>
				</HyperlinkButton>
			</CodeExample>

			<Footer
				sourcePageCodeURL={{
					componentType: 'BasicInput',
					componentName: 'HyperlinkButton',
				}}
				relatedControls={t('BasicInput.HyperlinkButton.related', { returnObjects: true })}
			/>
		</div>
	)
}
