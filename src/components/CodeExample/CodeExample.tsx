import React from 'react'
import styles from './styles.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {useTheme} from "../../utils/useTheme";

interface CodeExampleProps {
	className?: string
	style?: React.CSSProperties

	code?: string

	rightBlock?: React.ReactNode
	children: React.ReactNode
}

export const CodeExample = (props: CodeExampleProps): React.ReactElement => {
	const theme = useTheme()
	
	return (
		<div className={styles['main-block']}>
			<div>
				<div>
					{props.children}
				</div>
				{props.rightBlock &&
				<div>
					{props.rightBlock}
				</div>
				}
			</div>
			<SyntaxHighlighter language="typescript" style={}>

			</SyntaxHighlighter>
		</div>
	)
}

