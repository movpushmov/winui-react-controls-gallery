import styles from '../content.module.css'
import React, { useEffect, useState } from 'react'

import { DateButton } from '../DateButton'
import { getDaysInMonth } from '../../../../../utils/date'
import { CalendarZoom } from '../../../CalendarView'
import { Days } from '../../Days/Days'

interface ContentProps {
	locale: string

	currentPeriod: Date
	currentDay: {
		date: number
		month: number
		year: number
	}
}

function generateIndex(date: Date): string {
	return `${date.getDate()}.${date.getMonth()}`
}

export const Month = ({ locale, currentPeriod, currentDay } : ContentProps): React.ReactElement => {
	const [days, setDays] = useState(getDaysInMonth(
		currentPeriod.getMonth(),
		currentPeriod.getFullYear(),
	))

	useEffect(() => {
		setDays(getDaysInMonth(
			currentPeriod.getMonth(),
			currentPeriod.getFullYear(),
		))
	}, [currentPeriod])

	return (
		<>
			<Days locale={locale}/>

			<div className={styles['dates']}>
				{days.map(day =>
					<DateButton
						content={day.getDate()}
						isCurrentData={
							day.getDate() === currentDay.date &&
							day.getMonth() === currentDay.month &&
							day.getFullYear() === currentDay.year
						}
						isOut={day.getMonth() !== currentPeriod.getMonth() || day.getFullYear() !== currentPeriod.getFullYear()}
						key={generateIndex(day)}
					/>,
				)}
			</div>
		</>
	)
}

