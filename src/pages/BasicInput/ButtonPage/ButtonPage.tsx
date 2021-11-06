import React, { useCallback, useState } from 'react'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { useTranslation } from 'react-i18next'
import { Button, CheckBox, CheckBoxState, TextBlock, TitleBlock } from 'winui-react'
import styles from './styles.module.css'

export const ButtonPage = (): React.ReactElement => {
	const { t } = useTranslation()
	const [disabled, setDisabled] = useState(CheckBoxState.Unchecked)

	const checkboxHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value)
	}, [])

	return (
		<div className={styles['sub-page-container']}>
			<TitleBlock type="title-large">Button</TitleBlock>
			<TextBlock>{t('BasicInput.Button.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.Button.samples.text_content.title')}
				code={`
					<Button disabled={${disabled === CheckBoxState.Unchecked ? 'false' : 'true'}}>
						${t('BasicInput.Button.samples.text_content.content')}
					</Button>
				`}
				rightBlock={
					<CheckBox
						onChange={checkboxHandler}
						content={t('BasicInput.Button.samples.text_content.checkbox')}
					/>
				}
			>
				<Button disabled={disabled !== CheckBoxState.Unchecked}>
					${t('BasicInput.Button.samples.text_content.content')}
				</Button>
			</CodeExample>
		</div>
	)
}
