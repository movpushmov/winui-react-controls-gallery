import React from 'react'
import { Decade as DecadeType } from '../../../../../utils/date'
import styles from '../content.module.css'
import { DateButton } from '../DateButton'

interface YearProps {
	currentYear: number
	currentDecade: DecadeType

	setCurrentYear: (year: number) => void
	locale: string
}

function getDecadeYears(decade: DecadeType): number[] {
	const years: number[] = []

	for (let i = decade.start; i <= decade.end; i++) {
		years.push(i)
	}

	return years
}

export const Decade = (props: YearProps): React.ReactElement => {
	const years = getDecadeYears(props.currentDecade)

	return (
		<div className={styles['dates']}>
			{years.map(year =>
				<DateButton
					content={year}
					isCurrentData={props.currentYear === year}
					isOut={false}
					key={year}
					style={{
						width: 54,
						height: 54,
						margin: '18px 9px',
					}}

					onClick={() => props.setCurrentYear(year)}
				/>,
			)}
		</div>
	)
}
