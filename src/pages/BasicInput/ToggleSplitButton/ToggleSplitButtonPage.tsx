import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, TextBlock, TitleBlock, ToggleButton, ToggleSplitButton } from '../../../lib'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { Footer } from '../../../components/Footer/Footer'

const codeExample = (content: string): string => `
<ToggleSplitButton
    items={colors.map((color, key) =>
        <Button
            key={key}
            style={{
                background: 'transparent', border: 'none', padding: 0,
                marginLeft: 8, width: '100%', justifyContent: 'flex-start',
            }}
        >
            <div
                style={{ borderRadius: '50%', background: color.hex, width: 24, height: 24 }}
            />

            <p style={{ margin: 8 }}>{color.name}</p>
        </Button>,
    )}
    >
    {content}
</ToggleSplitButton>
`

type Color = {
	name: string
	hex: string
}

/*
* "text_box": {
          "title": "Using ToggleSplitButton to control type of TextBox.",
          "content": "Type here...",
          "items": [
            "RedEye",
            "Lock"
          ]
        }
* */

export const ToggleSplitButtonPage = (): React.ReactElement => {
	const { t } = useTranslation()
	const items: string[] = t(
		'BasicInput.ToggleSplitButton.samples.text_box.items',
		{ returnObjects: true },
	)

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>ToggleButton</TitleBlock>
			<TextBlock>{t('BasicInput.ToggleSplitButton.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.ToggleSplitButton.samples.text_box.title')}
				code={codeExample(
					t('BasicInput.ToggleSplitButton.samples.text_box.content'),
				)}
			>
				<ToggleSplitButton
					items={items.map((item, key) =>
						<Button
							key={key}
							style={{
								background: 'transparent', border: 'none', padding: 0,
								marginLeft: 8, width: '100%', justifyContent: 'flex-start',
							}}
						>
							<p style={{ margin: 8 }}>{item}</p>
						</Button>,
					)}
				>
					{t('BasicInput.ToggleSplitButton.samples.text_box.button')}
				</ToggleSplitButton>
			</CodeExample>

			<Footer
				sourcePageCodeURL={{
					componentType: 'BasicInput',
					componentName: 'ToggleSplitButton',
				}}
				relatedControls={t('BasicInput.ToggleSplitButton.related', { returnObjects: true })}
			/>
		</div>
	)
}
