import { useTranslation } from 'react-i18next'
import { CheckBox, TextBlock, TitleBlock, TreeNode, TreeView } from '../../../lib'
import React from 'react'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { TFunction } from 'i18next'

const twoState = (t: TFunction): string =>
	`<CheckBox content="${t('BasicInput.CheckBox.samples.two_state.content')}"/>`

const threeState = (t: TFunction): string =>
	`<CheckBox content="${t('BasicInput.CheckBox.samples.three_state.content')}" isThreeState/>`

const usingThreeState = (t: TFunction): string => `
<TreeView selectionMode="multiply">
\t<TreeNode title="${t('BasicInput.CheckBox.samples.using_three_state.top_label')}">
\t\t<TreeNode title="${t('BasicInput.CheckBox.samples.using_three_state.sub_label', { index: 1 })}"/>
\t\t<TreeNode title="${t('BasicInput.CheckBox.samples.using_three_state.sub_label', { index: 2 })}"/>
\t\t<TreeNode title="${t('BasicInput.CheckBox.samples.using_three_state.sub_label', { index: 3 })}"/>
\t</TreeNode>
</TreeView>
`

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
				code={usingThreeState(t)}
			>
				<TreeView selectionMode="multiply">
					<TreeNode title={t('BasicInput.CheckBox.samples.using_three_state.top_label')}>
						<TreeNode title={t('BasicInput.CheckBox.samples.using_three_state.sub_label', { index: 1 })}/>
						<TreeNode title={t('BasicInput.CheckBox.samples.using_three_state.sub_label', { index: 2 })}/>
						<TreeNode title={t('BasicInput.CheckBox.samples.using_three_state.sub_label', { index: 3 })}/>
					</TreeNode>
				</TreeView>
			</CodeExample>
		</div>
	)
}
