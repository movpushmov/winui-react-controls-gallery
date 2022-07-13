import { TFunction, useTranslation } from 'react-i18next'
import React, { useCallback, useState } from 'react'
import { Button, CheckBox, ContentDialog, ContentDialogSection, TextBlock, TitleBlock } from '../../../lib'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { Footer } from '../../../components/Footer/Footer'

const codeExample = (t: TFunction): string => `
<ContentDialog
    visible={open}
    title="${t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.title')}"
>
     <ContentDialogSection type="content">
      <TextBlock>
          ${t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.description')}
      </TextBlock>

      <CheckBox
          content="${t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.checkbox')}"
      />
     </ContentDialogSection>

     <ContentDialogSection type="actions">
         <Button type="accent" onClick={() => changeValue("User saved their work")}>
             ${t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.save.label')}
         </Button>
         <Button onClick={() => changeValue("User didn't save their work")}>
             ${t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.dontSave.label')}
         </Button>
         <Button onClick={() => changeValue("User cancelled the dialog")}>
             ${t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.cancel.label')}
         </Button>
     </ContentDialogSection>
</ContentDialog>

<Button onClick={toggleHandler}>
    ${t('DialogsAndFlyouts.ContentDialog.samples.default.content')}
</Button>

{value && <TextBlock>{value}</TextBlock>}
`

export const ContentDialogPage = (): React.ReactElement => {
	const { t } = useTranslation()
	const [value, setValue] = useState('')

	const [open, setIsOpen] = useState(false)

	const toggleHandler = useCallback(() => setIsOpen(o => !o), [])
	const changeValue = useCallback((value: string) => {
		setIsOpen(false)
		setValue(value)
	}, [])

	const save = t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.save.value')
	const dontSave = t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.dontSave.value')
	const cancel = t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.cancel.value')

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>
                ContentDialog
			</TitleBlock>
			<TextBlock>{t('DialogsAndFlyouts.ContentDialog.long_desc')}</TextBlock>

			<CodeExample
				title={t('DialogsAndFlyouts.ContentDialog.samples.default.title')}
				code={codeExample(t)}
			>
				<ContentDialog
					visible={open}
					title={t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.title')}
				>
					<ContentDialogSection type="content">
						<TextBlock>
							{t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.description')}
						</TextBlock>

						<CheckBox
							content={t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.checkbox')}
						/>
					</ContentDialogSection>

					<ContentDialogSection type="actions">
						<Button type="accent" onClick={() => changeValue(save)}>
							{t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.save.label')}
						</Button>
						<Button onClick={() => changeValue(dontSave)}>
							{t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.dontSave.label')}
						</Button>
						<Button onClick={() => changeValue(cancel)}>
							{t('DialogsAndFlyouts.ContentDialog.samples.default.dialog.cancel.label')}
						</Button>
					</ContentDialogSection>
				</ContentDialog>

				<Button onClick={toggleHandler}>
					{t('DialogsAndFlyouts.ContentDialog.samples.default.content')}
				</Button>

				{value && <TextBlock>{value}</TextBlock>}
			</CodeExample>

			<Footer
				sourcePageCodeURL={{
					componentName: 'ContentDialog',
					componentType: 'DialogsAndFlyouts',
				}}
				relatedControls={t('DialogsAndFlyouts.ContentDialog.related', { returnObjects: true })}
			/>
		</div>
	)
}
