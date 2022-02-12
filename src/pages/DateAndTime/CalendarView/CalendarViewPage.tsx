import React from 'react'
import { useTranslation } from 'react-i18next'
import { TitleBlock } from '../../../lib'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { CalendarView } from '../../../lib/DateAndTime/CalendarView/CalendarView'

export const CalendarViewPage = (): React.ReactElement => {
	const { t } = useTranslation()

	return (
		<div>
			<TitleBlock type="title" style={{ margin: 0 }}>
                CalendarView
			</TitleBlock>

			<CodeExample title="CalendarView">
				<CalendarView locale="ru"/>
			</CodeExample>
		</div>
	)
}
