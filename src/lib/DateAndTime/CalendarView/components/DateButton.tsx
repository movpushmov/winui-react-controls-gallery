import React, { ForwardedRef } from 'react'
import styles from '../styles.module.css'
import { Button } from '../../../BasicInput/Button/Button'
import { PlainDate } from '../../../utils/dateUtils'
import { Day } from './CalendarViewItem'

interface DateButtonProps {
	date: Day
	style: React.CSSProperties
}

export const DateButton = React.forwardRef(({ date, style } : DateButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
	let className = date.isCurrentDay ? styles['current-date'] : styles['date']

	if (date.out && !date.isCurrentDay) {
		className = styles['out-date']
	}

	return (
		<Button
			className={className}
			ref={ref}
			key={date.date}
			style={style}
			type={date.isCurrentDay ? 'accent' : 'default'}
		>
			{date.date}
		</Button>
	)
})
