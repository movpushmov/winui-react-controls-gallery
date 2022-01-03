import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '../../BasicInput/Button/Button'
import { Icon, IconType } from '../../Icons/Icon'
import { TextBlock } from '../../Text/Text/TextBlock'

import styles from './styles.module.css'
import { FixedSizeGrid } from 'react-window'
import { CalendarViewConfig, CalendarViewProps, TranslationVariant } from './types'
import { enConfig } from './configs/en'
import { CalendarViewItem, Day } from './components/CalendarViewItem'
import {getDays, isPlaneDatesEqual, PlainDate, plainDateToString, toPlainDate} from '../../utils/dateUtils'
import memoizeOne from 'memoize-one'

const daysCount = 7
const overRowsCount = 6

const getMonths = memoizeOne((config: CalendarViewConfig) => {
	const months: Record<number, TranslationVariant> = {}
	let index = 0

	for (const month of Object.values(config.months)) {
		months[index] = month
		index++
	}

	return months
})

export const CalendarView = (props: CalendarViewProps): React.ReactElement => {
	const defaultProps = Object.assign({
		config: enConfig,
		identifier: 'gregorian',
		selectionMode: 'single',

		isGroupLabelVisible: true,
		isOutOfScopeEnabled: true,
	}, props)

	const months = getMonths(defaultProps.config)
	const gridRef = React.createRef<FixedSizeGrid<Day[]>>()

	const loaded = useRef<boolean>(false)

	const [currentPeriod, setCurrentPeriod] = useState<PlainDate>(toPlainDate(new Date()))

	const changeCurrentMonth = useCallback((date: PlainDate) => {
		setCurrentPeriod(date)
	}, [months])

	const [days, setDays] = useState(getDays(currentPeriod, months, changeCurrentMonth))

	useEffect(() => {
		setDays(getDays(currentPeriod, months, changeCurrentMonth))
	}, [currentPeriod])

	useEffect(() => {
		if (gridRef && gridRef.current && !loaded.current) {
			gridRef.current.scrollToItem({
				rowIndex: 13,
				columnIndex: 0,

				align: 'center',
			})

			loaded.current = true
		}
	}, [gridRef])

	const scrollPrev = useCallback(() => {
		for (let i = 0; i < days.length; i++) {
			const newPeriod = Object.assign({}, currentPeriod)


			if (isPlaneDatesEqual(days[i], currentPeriod)) {
				const row = Math.floor(i / daysCount)
				const column = i - row * daysCount

				if (gridRef.current) {

				}
			}
		}
	}, [])

	return (
		<div className={styles['container']}>
			<div className={styles['controls']}>
				<Button className={styles['timelapse-button']}>
					<TextBlock type="body-strong">
						{plainDateToString(currentPeriod, months, 'mf yyyy')}
					</TextBlock>
				</Button>

				<Button className={styles['scroll-button']}>
					<Icon type={IconType.CaretUpSolid8} style={{ color: 'var(--fill-color-control-strong-default)' }}/>
				</Button>
				<Button className={styles['scroll-button']}>
					<Icon type={IconType.CaretDownSolid8} style={{ color: 'var(--fill-color-control-strong-default)' }}/>
				</Button>
			</div>

			<div className={styles['calendar-content']}>
				<div className={styles['days-names']}>
					{Object.values(defaultProps.config.days).map(day =>
						<TextBlock key={day.shortName}>{day.shortName}</TextBlock>,
					)}
				</div>

				<div className={styles['dates']}>
					<FixedSizeGrid
						ref={gridRef}
						columnCount={daysCount}
						rowCount={Math.floor(days.length / daysCount)}
						rowHeight={41}
						columnWidth={41}

						itemData={days}

						height={240}
						width={300}
					>
						{CalendarViewItem}
					</FixedSizeGrid>
				</div>
			</div>
		</div>
	)
}

