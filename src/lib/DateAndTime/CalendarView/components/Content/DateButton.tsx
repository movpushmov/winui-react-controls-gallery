import React from 'react'
import { Button } from '../../../../BasicInput/Button/Button'

import styles from './content.module.css'

interface DateButtonProps {
	data: Date[]
	style: React.CSSProperties

	rowIndex: number
	columnIndex: number
}

const daysInRow = 7

export const DateButton = React.memo(({ data, style, rowIndex, columnIndex } : DateButtonProps): React.ReactElement => {
	const isCurrentDate = false
	const out = false

	let className = isCurrentDate ? styles['current-date'] : styles['date']

	if (out && !isCurrentDate) {
		className = styles['out-date']
	}

	const index = rowIndex * daysInRow + columnIndex
	const day = data[index]

	return (
		<Button
			className={className}
			key={day.getDate()}
			style={style}
			type={isCurrentDate ? 'accent' : 'default'}
		>
			{day.getDate()}
		</Button>
	)
})
