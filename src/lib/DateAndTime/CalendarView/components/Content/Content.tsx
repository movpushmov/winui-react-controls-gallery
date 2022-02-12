import styles from './content.module.css'
import React from 'react'

import { FixedSizeGrid } from 'react-window'
import { DateButton } from './DateButton'

const currentYear = 2021

const daysInJanuary = 31
const indexOffset = 1

const daysInWeek = 7

interface ContentProps {
	locale: string
}

export const Content = ({ locale } : ContentProps): React.ReactElement => {
	const days = Array(daysInJanuary).fill(void 0).map((v, i) => new Date(currentYear, 0, i + indexOffset))
	console.log(days)

	return (
		<div className={styles['dates']}>
			<FixedSizeGrid
				columnCount={7}
				rowCount={Math.floor(days.length / daysInWeek)}
				rowHeight={41}
				columnWidth={41}

				itemData={days}

				height={240}
				width={300}
			>
				{DateButton}
			</FixedSizeGrid>
		</div>
	)
}

