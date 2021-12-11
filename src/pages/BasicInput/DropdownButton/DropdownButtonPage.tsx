import React from 'react'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { TFunction, useTranslation } from 'react-i18next'
import { DropDownButton, Icon, IconType, TextBlock, TitleBlock } from '../../../lib'
import styles from './styles.module.css'
import { Footer } from '../../../components/Footer/Footer'

type CodeExampleFunc = (
	t: TFunction<'translation'>,
) => string

const simpleDropdown: CodeExampleFunc = t => `
<DropDownButton items={items.map((item: string) => ({ name: item }))}>
	${t('BasicInput.DropDownButton.samples.simple.label')}
</DropDownButton>
`

const dropdownWithIcons: CodeExampleFunc = t => `
<DropDownButton
		items={itemsWithIcons.map(item => ({
			icon: item.icon,
			name: item.label,
		}))}
	>
	<Icon type={labelIconValue}/>
</DropDownButton>
`

export const DropdownButtonPage = (): React.ReactElement => {
	const { t } = useTranslation()

	const items: string[] = t(
		'BasicInput.DropDownButton.samples.simple.elements',
		{ returnObjects: true },
	)

	const itemsWithIcons: { label: string; icon: string }[] = t(
		'BasicInput.DropDownButton.samples.withIcons.elements',
		{ returnObjects: true },
	)

	const iconsKeys = Object.keys(IconType)
	const iconsValues = Object.values(IconType)

	const labelIconIndex: number = iconsKeys.indexOf(t('BasicInput.DropDownButton.samples.withIcons.labelIcon'))

	const labelIconValue: IconType = iconsValues[labelIconIndex]

	return (
		<div className={styles['sub-page-container']}>
			<TitleBlock type="title" style={{ margin: 0 }}>DropdownButton</TitleBlock>
			<TextBlock>{t('BasicInput.DropDownButton.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.DropDownButton.samples.simple.title')}
				code={simpleDropdown(t)}
			>
				<DropDownButton items={items.map((item: string) => ({ name: item }))}>
					{t('BasicInput.DropDownButton.samples.simple.label')}
				</DropDownButton>
			</CodeExample>

			<CodeExample
				title={t('BasicInput.DropDownButton.samples.withIcons.title')}
				code={dropdownWithIcons(t)}
			>
				<DropDownButton
					items={itemsWithIcons.map(item => ({
						icon: iconsValues[iconsKeys.indexOf(item.icon)],
						name: item.label,
					}))}
				>
					<Icon type={labelIconValue}/>
				</DropDownButton>
			</CodeExample>

			<Footer
				sourcePageCodeURL="https://github.com/movpushmov/winui-react-controls-gallery/blob/main/src/pages/BasicInput/ButtonPage/ButtonPage.tsx"
				relatedControls={t('BasicInput.DropDownButton.related', { returnObjects: true })}
			/>
		</div>
	)
}
