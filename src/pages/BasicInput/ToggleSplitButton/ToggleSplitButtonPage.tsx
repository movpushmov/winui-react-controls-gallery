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

export const ToggleSplitButtonPage = (): React.ReactElement => {
	const { t } = useTranslation()
	const colors: Color[] = t(
		'BasicInput.ToggleSplitButton.samples.number_box.content',
		{ returnObjects: true },
	)

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>ToggleButton</TitleBlock>
			<TextBlock>{t('BasicInput.ToggleSplitButton.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.ToggleSplitButton.samples.number_box.title')}
				code={codeExample(
					t('BasicInput.ToggleSplitButton.samples.number_box.content'),
				)}
			>
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
					{t('BasicInput.ToggleSplitButton.samples.with_text.content')}
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
