import React from 'react'
import { getMonths } from '../../../../../utils/date'

import styles from '../content.module.css'
import { DateButton } from '../DateButton'

interface YearProps {
	now: {
		year: number
		month: number
	}
	currentYear: number

	setCurrentPeriod: (period: Date) => void
	locale: string
}

const firstDay = 1

export const Year = (props: YearProps): React.ReactElement => {
	const months = getMonths(props.locale)

	return (
		<div className={styles['dates']}>
			{months.map(month =>
				<DateButton
					content={month.toLocaleString(props.locale, { month: 'short' })}
					isCurrentData={
						props.currentYear === props.now.year &&
                        month.getMonth() === props.now.month &&
                        month.getFullYear() === props.now.year
					}
					isOut={false}
					key={month.getMonth()}
					style={{
						width: 54,
						height: 54,
						margin: '18px 9px',
					}}

					onClick={() => {
						props.setCurrentPeriod(new Date(props.currentYear, month.getMonth(), firstDay))
					}}
				/>,
			)}
		</div>
	)
}
