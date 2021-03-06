import React from 'react'
import { useTranslation } from 'react-i18next'
import { TitleBlock } from '../../../lib'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { CalendarView } from '../../../lib/DateAndTime/CalendarView/CalendarView'
import { CalendarDatePicker } from '../../../lib/DateAndTime/CalendarDatePicker/CalendarDatePicker'

export const CalendarViewPage = (): React.ReactElement => {
	const { t } = useTranslation()

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>
                CalendarView
			</TitleBlock>

			<CodeExample title="CalendarView">
				<CalendarView
					selectionMode="none"
					locale="ru"
					validator={date => {
						if (date.type === 'day') {
							// eslint-disable-next-line @typescript-eslint/no-magic-numbers
							return date.value.getDate() > 4
						}

						return true
					}}
				/>
			</CodeExample>

			<CodeExample title="Calendar DatePicker">
				<CalendarDatePicker/>
			</CodeExample>
		</div>
	)
}
