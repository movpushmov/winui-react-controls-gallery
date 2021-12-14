import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CheckBox, CheckBoxState, TextBlock, TitleBlock, ToggleButton } from '../../../lib'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { Footer } from '../../../components/Footer/Footer'

const codeExample = (content: string, disabled: boolean): string => `
<ToggleButton${disabled ? ' disabled' : ''}>
    ${content}
</ToggleButton>
`

export const ToggleButtonPage = (): React.ReactElement => {
	const { t } = useTranslation()
	const [state, setState] = useState(CheckBoxState.Unchecked)

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>ToggleButton</TitleBlock>
			<TextBlock>{t('BasicInput.ToggleButton.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.ToggleButton.samples.simple.title')}
				rightBlock={(
					<CheckBox
						value={state}
						onCheck={setState}
						content={t('BasicInput.ToggleButton.samples.simple.checkbox')}
					/>
				)}

				code={codeExample(
					t('BasicInput.ToggleButton.samples.simple.content'),
					state === CheckBoxState.Checked,
				)}
			>
				<ToggleButton disabled={state === CheckBoxState.Checked}>
					{t('BasicInput.ToggleButton.samples.simple.content')}
				</ToggleButton>
			</CodeExample>

			<Footer
				sourcePageCodeURL={{
					componentType: 'BasicInput',
					componentName: 'ToggleButton',
				}}
				relatedControls={t('BasicInput.ToggleButton.related', { returnObjects: true })}
			/>
		</div>
	)
}
