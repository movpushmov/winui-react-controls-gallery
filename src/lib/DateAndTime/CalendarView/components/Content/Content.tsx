import styles from './content.module.css'
import React, { useEffect, useRef, useState } from 'react'

import { FixedSizeGrid } from 'react-window'
import { DateButton } from './DateButton'
import { PlainDate, getDays, getNearestMonths, getNearestYears, Month } from '../../../../utils/date'

const middleMonthSize = 175
const daysInWeek = 7

interface ContentProps {
	locale: string

	currentPeriod: Month
	setCurrentPeriod: (value: Month) => void
}

function getCurrentDay(): PlainDate {
	const date = new Date()

	return {
		day: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear(),
	}
}

export const Content = ({ locale, currentPeriod, setCurrentPeriod } : ContentProps): React.ReactElement => {
	const { month, day, year } = getCurrentDay()

	const gridRef = useRef<FixedSizeGrid>(null)
	const outerRef = useRef<HTMLDivElement>(null)
	const nextDate = useRef<PlainDate>(null)

	const [years, setYears] = useState(getNearestYears(year))
	const [months, setMonths] = useState(getNearestMonths(month, year))

	const [days, setDays] = useState(getDays(months))

	useEffect(() => {
		if (gridRef.current) {
			gridRef.current.scrollToItem({
				rowIndex: 13,
				columnIndex: 0,

				align: 'center',
			})
		}
	}, [gridRef])

	function onScroll(): void {
		const el = outerRef.current

		if (el) {
			setCurrentPeriod(months[Math.floor(el.scrollTop / middleMonthSize)])
		}
	}

	useEffect(() => {
		const containerRef = outerRef.current

		if (containerRef) {
			containerRef.className = styles['container']
			containerRef.addEventListener('scroll', onScroll)
		}

		return () => {
			if (containerRef) {
				containerRef.removeEventListener('scroll', onScroll)
			}
		}
	}, [outerRef])

	return (
		<div className={styles['dates']}>
			<FixedSizeGrid
				ref={gridRef}
				outerRef={outerRef}
				columnCount={7}
				rowCount={Math.floor(days.length / daysInWeek)}
				rowHeight={41}
				columnWidth={41}

				itemData={{
					days,
					currentDate: { day, month, year },
					currentMonth: currentPeriod,
				}}

				height={240}
				width={300}
			>
				{DateButton}
			</FixedSizeGrid>
		</div>
	)
}

