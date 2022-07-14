import { useTranslation } from 'react-i18next'
import { CheckBox, TextBlock, TitleBlock, TreeNode, TreeView } from '../../../lib'
import React from 'react'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { TFunction } from 'i18next'

const twoState = (t: TFunction): string =>
	`<CheckBox content="${t('BasicInput.CheckBox.samples.two_state.content')}"/>`

const threeState = (t: TFunction): string =>
	`<CheckBox content="${t('BasicInput.CheckBox.samples.three_state.content')}" isThreeState/>`

export const CheckBoxPage = (): React.ReactElement => {
	const { t } = useTranslation()

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>
                CheckBox
			</TitleBlock>
			<TextBlock>{t('BasicInput.CheckBox.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.CheckBox.samples.two_state.title')}
				code={twoState(t)}
			>
				<CheckBox content={t('BasicInput.CheckBox.samples.two_state.content')}/>
			</CodeExample>

			<CodeExample
				title={t('BasicInput.CheckBox.samples.three_state.title')}
				code={threeState(t)}
			>
				<CheckBox isThreeState content={t('BasicInput.CheckBox.samples.three_state.content')}/>
			</CodeExample>

			<CodeExample
				title={t('BasicInput.CheckBox.samples.using_three_state.title')}
				code={threeState(t)}
			>
				<TreeView selectionMode="multiply" onValueSelect={v => console.log(v)}>
					<TreeNode title="Options">
						<TreeNode title="Option 1"/>
						<TreeNode title="Option 2"/>
						<TreeNode title="Option 3"/>
					</TreeNode>
				</TreeView>
			</CodeExample>
		</div>
	)
}
