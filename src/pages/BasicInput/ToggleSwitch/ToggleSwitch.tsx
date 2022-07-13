import React from 'react'
import { useTranslation } from 'react-i18next'
import { TextBlock, TitleBlock } from '../../../lib'

export const ToggleSwitch = (): React.ReactElement => {
	const { t } = useTranslation()

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>ToggleSwitch</TitleBlock>
			<TextBlock>{t('BasicInput.ToggleSwitch.long_desc')}</TextBlock>
		</div>
	)
}
