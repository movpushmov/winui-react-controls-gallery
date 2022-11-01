import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
	ProgressRing,
	TextBlock,
	TitleBlock, ToggleSwitch,
} from '../../../lib'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { TFunction } from 'i18next'
import { Footer } from '../../../components/Footer/Footer'

const toggleSwitchCode = (t: TFunction): string => `
<ToggleSwitch
    header="${t('BasicInput.ToggleSwitch.samples.custom_props.header')}"
    onContent="${t('BasicInput.ToggleSwitch.samples.custom_props.content.on')}"
    offContent="${t('BasicInput.ToggleSwitch.samples.custom_props.content.off')}"
    value={active}
    onToggled={setIsActive}
/>

<ProgressRing active={active} style={{ marginTop: 20 }}/>
`

export const ToggleSwitchPage = (): React.ReactElement => {
	const { t } = useTranslation()
	const [active, setIsActive] = useState(true)

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>ToggleSwitch</TitleBlock>
			<TextBlock>{t('BasicInput.ToggleSwitch.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.ToggleSwitch.samples.custom_props.title')}
				code={toggleSwitchCode(t)}
			>
				<ToggleSwitch
					header={t('BasicInput.ToggleSwitch.samples.custom_props.header')}
					onContent={t('BasicInput.ToggleSwitch.samples.custom_props.content.on')}
					offContent={t('BasicInput.ToggleSwitch.samples.custom_props.content.off')}
					value={active}
					onToggled={setIsActive}
				/>

				<ProgressRing active={active} style={{ marginTop: 20 }}/>
			</CodeExample>

			<Footer
				sourcePageCodeURL={{
					componentType: 'BasicInput',
					componentName: 'ToggleSwitch',
				}}
				relatedControls={t('BasicInput.ToggleSwitch.related', { returnObjects: true })}
			/>
		</div>
	)
}
