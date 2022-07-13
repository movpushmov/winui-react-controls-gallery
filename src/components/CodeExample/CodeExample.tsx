import React from 'react'
import styles from './styles.module.css'
import { TitleBlock } from '../../lib'
import { CodeBlock } from './components/CodeBlock'

interface CodeExampleProps {
	title?: string
	code?: string

	rightBlock?: React.ReactNode
	children: React.ReactNode
}

export const CodeExample = (props: CodeExampleProps): React.ReactElement =>
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

			<CodeBlock code={props.code}/>
		</div>
	</>


