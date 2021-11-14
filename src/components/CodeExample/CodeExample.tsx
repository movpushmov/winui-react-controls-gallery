import React from 'react'
import styles from './styles.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useTheme } from '../../utils/useTheme'
import { TitleBlock } from '../../lib'

interface CodeExampleProps {
	title?: string
	code?: string

	rightBlock?: React.ReactNode
	children: React.ReactNode
}

export const CodeExample = (props: CodeExampleProps): React.ReactElement => {
	const theme = useTheme()

	return (
		<>
			<TitleBlock>{props.title}</TitleBlock>

			<div className={styles['main-block']}>
				<div className={styles['example-block']}>
					<div className={styles['example']}>
						{props.children}
					</div>
					{props.rightBlock &&
					<div className={styles['right-block']}>
						{props.rightBlock}
					</div>
					}
				</div>
				{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
				<SyntaxHighlighter style={theme === 'dark' ? atomOneDark : atomOneLight}
					language="jsx"
					className={styles['code-block']}
				>
					{props.code}
				</SyntaxHighlighter>
			</div>
		</>
	)
}

