import React from 'react'
import { useTheme } from '../../../utils/useTheme'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styles from '../styles.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'

interface Props {
	code?: string
	standalone?: boolean
	language?: string
}

export const CodeBlock = (props: Props): React.ReactElement => {
	const theme = useTheme()

	return (
		<SyntaxHighlighter
			style={theme === 'dark' ? atomOneDark : atomOneLight}
			language={props.language ?? 'jsx'}
			className={props.standalone ? styles['code-block-standalone'] : styles['code-block']}
		>
			{props.code ?? ''}
		</SyntaxHighlighter>
	)
}
