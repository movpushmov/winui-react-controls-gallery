import { useTranslation } from 'react-i18next'
import { TextBlock, TitleBlock } from '../../../lib'
import React from 'react'

export const CheckBoxPage = (): React.ReactElement => {
	const { t } = useTranslation()

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>
                CheckBox
			</TitleBlock>
			<TextBlock>{t('BasicInput.CheckBox.long_desc')}</TextBlock>


		</div>
	)
}
