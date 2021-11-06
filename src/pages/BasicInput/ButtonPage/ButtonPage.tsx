import React, { useCallback, useState } from 'react'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { TFunction, useTranslation } from 'react-i18next'
import { Button, CheckBox, CheckBoxState, TextBlock, TitleBlock } from 'winui-react'
import styles from './styles.module.css'

const simpleButtonCode = (t: TFunction<'translation'>, disabled: boolean): string => `
<Button disabled={${disabled.toString()}}>${t('BasicInput.Button.samples.text_content.content')}</Button>
`

export const ButtonPage = (): React.ReactElement => {
	const { t } = useTranslation()
	const [state, setState] = useState(CheckBoxState.Unchecked)

	const checkboxHandler = useCallback((s: CheckBoxState) => {
		console.log(s)
		setState(s)
	}, [])

	return (
		<div className={styles['sub-page-container']}>
			<TitleBlock type="title" style={{ margin: 0 }}>Button</TitleBlock>
			<TextBlock>{t('BasicInput.Button.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.Button.samples.text_content.title')}
				code={simpleButtonCode(t, state === CheckBoxState.Checked)}
				rightBlock={
					<CheckBox
						onCheck={checkboxHandler}
						content={t('BasicInput.Button.samples.text_content.checkbox')}
					/>
				}
			>
				<Button disabled={state === CheckBoxState.Checked}>
					{t('BasicInput.Button.samples.text_content.content')}
				</Button>
			</CodeExample>
		</div>
	)
}
