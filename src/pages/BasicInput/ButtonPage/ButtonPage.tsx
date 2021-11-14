import React, { useCallback, useState } from 'react'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { TFunction, useTranslation } from 'react-i18next'
import { Button, CheckBox, CheckBoxState, TextBlock, TitleBlock } from 'winui-react'
import styles from './styles.module.css'
import { Footer } from '../../../components/Footer/Footer'

type CodeExampleFunc = (
	t: TFunction<'translation'>,
) => string

type SimpleCodeExampleFunc = (
	t: TFunction<'translation'>,
	disabled: boolean
) => string

const simpleButtonCode: SimpleCodeExampleFunc = (t, disabled) => `
<Button disabled={${disabled.toString()}}>${t('BasicInput.Button.samples.text_content.content')}</Button>
`

const accentButtonCode: SimpleCodeExampleFunc = (t, disabled) => `
<Button type="accent" disabled={${disabled.toString()}}>${t('BasicInput.Button.samples.accent_styled.content')}</Button>
`

const largeContentButtonCode: CodeExampleFunc = t => `
<Button>
	${t('BasicInput.Button.samples.large_content.content')}
</Button>

<Button style={{ margin: '8px 0', width: '200px' }}>
	${t('BasicInput.Button.samples.large_content.content')}
</Button>

<Button style={{ width: '120px' }}>
	${t('BasicInput.Button.samples.large_content.content')}
</Button>`

export const ButtonPage = (): React.ReactElement => {
	const { t } = useTranslation()

	const [state, setState] = useState(CheckBoxState.Unchecked)
	const [accentState, setAccentState] = useState(CheckBoxState.Unchecked)

	const checkboxHandler = useCallback((s: CheckBoxState) => {
		setState(s)
	}, [])

	const accentCheckboxHandler = useCallback((s: CheckBoxState) => {
		setAccentState(s)
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

			<CodeExample
				title={t('BasicInput.Button.samples.large_content.title')}
				code={largeContentButtonCode(t)}
			>
				<Button>
					{t('BasicInput.Button.samples.large_content.content')}
				</Button>
				<Button style={{ margin: '8px 0', width: '200px' }}>
					{t('BasicInput.Button.samples.large_content.content')}
				</Button>
				<Button style={{ width: '120px' }}>
					{t('BasicInput.Button.samples.large_content.content')}
				</Button>
			</CodeExample>

			<CodeExample
				title={t('BasicInput.Button.samples.accent_styled.title')}
				code={accentButtonCode(t, accentState === CheckBoxState.Checked)}
				rightBlock={
					<CheckBox
						onCheck={accentCheckboxHandler}
						content={t('BasicInput.Button.samples.text_content.checkbox')}
					/>
				}
			>
				<Button type="accent" disabled={accentState === CheckBoxState.Checked}>
					{t('BasicInput.Button.samples.accent_styled.content')}
				</Button>
			</CodeExample>

			<Footer
				sourcePageCodeURL="https://github.com/movpushmov/winui-react-controls-gallery/blob/main/src/pages/BasicInput/ButtonPage/ButtonPage.tsx"
				relatedControls={t('BasicInput.Button.related', { returnObjects: true })}
			/>
		</div>
	)
}
