import React, { memo, useEffect, useRef } from 'react'
import { Trigger } from '../../../utils/dateUtils'
import { useIntersection } from '../../../utils/useIntersection'
import { DateButton } from './DateButton'

export interface Day {
	out: boolean

	label?: string

	day: number

	date: number
	month: number
	year: number

	isCurrentDay: boolean

	trigger?: Trigger
}

interface CalendarViewItemProps {
	data: Day[]

	columnIndex: number
	rowIndex: number

	style: React.CSSProperties
}

const rowMultiplier = 7

export const CalendarViewItem = memo(({ data, columnIndex, rowIndex, style } : CalendarViewItemProps) => {
	const ref = useRef<HTMLButtonElement>(null)

	const index = rowIndex * rowMultiplier + columnIndex

	const date = data[index]

	useEffect(() => {
		if (date.trigger) {
			date.trigger({
				day: date.date,
				dayIndex: date.day,
				month: date.month,
				year: date.year,
			})
		}
	}, [])

	return <DateButton date={date} ref={ref} style={style}/>
})
