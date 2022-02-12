import React, { useState } from 'react'
import styles from './styles.module.css'

import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import { Days } from './components/Days/Days'
import { PlainDate, Month, getCurrentDate } from '../../utils/date'

interface CalendarViewProps {
	locale?: string
	identifier?: string
	selectionMode?: 'single' | 'multiply' | 'none'

	isGroupLabelVisible?: boolean
	isOutOfScopeEnabled?: boolean
}

export const CalendarView = (props: CalendarViewProps): React.ReactElement => {
	const defaultProps = Object.assign({
		locale: 'en-US',
		identifier: 'gregorian',
		selectionMode: 'single',

		isGroupLabelVisible: true,
		isOutOfScopeEnabled: true,
	}, props)

	const date = getCurrentDate()
	const [currentPeriod, setCurrentPeriod] = useState<Month>({ month: date.month, year: date.year })

	return (
		<div className={styles['container']}>
			<Header currentPeriodDate={currentPeriod} locale={defaultProps.locale}/>

			<div className={styles['content']}>
				<Days locale={defaultProps.locale}/>
				<Content
					locale={defaultProps.locale}
					currentPeriod={currentPeriod}
					setCurrentPeriod={setCurrentPeriod}
				/>
			</div>
		</div>
	)
}
