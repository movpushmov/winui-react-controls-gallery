import React from 'react'
import { Button } from '../../../../BasicInput/Button/Button'

import styles from './content.module.css'
import { PlainDate, isDatesEqual, Month } from '../../../../utils/date'

interface DateButtonProps {
	data: {
		days: PlainDate[]
		currentMonth: Month
		currentDate: PlainDate
	}

	style: React.CSSProperties

	rowIndex: number
	columnIndex: number
}

const daysInRow = 7

export const DateButton = React.memo(({ data, style, rowIndex, columnIndex } : DateButtonProps): React.ReactElement => {
	const index = rowIndex * daysInRow + columnIndex

	const date = data.days[index]
	const { day, month, year } = date

	const isCurrentDate = isDatesEqual(date, data.currentDate)
	const out = !(data.currentMonth.month === month && data.currentMonth.year === year)

	let className = isCurrentDate ? styles['current-date'] : styles['date']

	if (out && !isCurrentDate) {
		className = styles['out-date']
	}

	return (
		<Button
			className={className}
			key={`${day}.${month}.${year}`}
			style={style}
			type={isCurrentDate ? 'accent' : 'default'}
		>
			{day}
		</Button>
	)
})
