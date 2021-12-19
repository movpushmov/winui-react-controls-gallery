import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, SplitButton, TextBlock, TitleBlock, ToggleButton } from '../../../lib'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { Footer } from '../../../components/Footer/Footer'

const codeExample = (content: string): string => `
<SplitButton
    items={colors.map((color, key) =>
        <Button
            key={key}
            style={{ background: 'transparent', border: 'none', padding: 0, marginLeft: 8 }}
        >
            <div
                style={{ borderRadius: '50%', background: color.hex, width: 24, height: 24 }}
            />

            <p style={{ margin: 8 }}>{color.name}</p>
        </Button>,
    )}
    >
    {content}
</SplitButton>
`

type Color = {
	name: string
	hex: string
}

export const SplitButtonPage = (): React.ReactElement => {
	const { t } = useTranslation()
	const colors: Color[] = t(
		'BasicInput.SplitButton.samples.with_text.colors',
		{ returnObjects: true },
	)

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>ToggleButton</TitleBlock>
			<TextBlock>{t('BasicInput.SplitButton.long_desc')}</TextBlock>

			<CodeExample
				title={t('BasicInput.SplitButton.samples.with_text.title')}
				code={codeExample(
					t('BasicInput.SplitButton.samples.with_text.content'),
				)}
			>
				<SplitButton
					items={colors.map((color, key) =>
						<Button
							key={key}
							style={{ background: 'transparent', border: 'none', padding: 0, marginLeft: 8 }}
						>
							<div
								style={{ borderRadius: '50%', background: color.hex, width: 24, height: 24 }}
							/>

							<p style={{ margin: 8 }}>{color.name}</p>
						</Button>,
					)}
				>
					{t('BasicInput.SplitButton.samples.with_text.content')}
				</SplitButton>
			</CodeExample>

			<Footer
				sourcePageCodeURL={{
					componentType: 'BasicInput',
					componentName: 'ToggleButton',
				}}
				relatedControls={t('BasicInput.SplitButton.related', { returnObjects: true })}
			/>
		</div>
	)
}
