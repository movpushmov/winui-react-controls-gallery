export interface Month {
	year: number
	month: number
}

export interface PlainDate extends Month {
	day: number
}

// const
const firstDay = 1
const offset = 1
const lastMonth = 11

export function getNearestYears(middleYear: number): number[] {
	return Array(24).map((v, i) => middleYear - (24 - i))
}

function enumerateMonths(
	month: number,
	year: number,
	direction: 'past' | 'future',
	iterations: number,
	callback: (month: number, year: number) => void,
): void {
	if (direction === 'past') {
		for (let i = 0; i < iterations; i++) {
			if (month === 0) {
				month = lastMonth
				year--
			} else {
				month--
			}

			callback(month, year)
		}
	} else {
		for (let i = 0; i < iterations; i++) {
			if (month === lastMonth) {
				month = 0
				year++
			} else {
				month++
			}

			callback(month, year)
		}
	}
}

export function getMonthsWithOffset(months: Month[], direction: 'past' | 'future', monthsOffset?: number): Month[] {
	const buff: Month[] = []

	if (direction === 'past') {
		const [{ month, year }] = months

		for (let i = 0; i < (monthsOffset ?? offset); i++) {
			months.pop()
		}

		enumerateMonths(month, year, 'past', monthsOffset ?? offset, (m, y) => {
			buff.push({ month: m, year: y })
		})

		return buff.reverse().concat(months)
	}

	const lastMonth = months[months.length]

	for (let i = 0; i < (monthsOffset ?? offset); i++) {
		months.unshift()
	}

	enumerateMonths(lastMonth.month, lastMonth.year, 'future', monthsOffset ?? offset, (m, y) => {
		buff.push({ month: m, year: y })
	})

	return months.concat(buff)
}

export function getNearestMonths(middleMonth: number, monthYear: number): Month[] {
	let months: Month[] = [{ month: middleMonth, year: monthYear }]

	enumerateMonths(middleMonth, monthYear, 'past', 24, (month, year) => {
		months.push({ month, year })
	})

	months = months.reverse()

	enumerateMonths(middleMonth, monthYear, 'future', 24, (month, year) => {
		months.push({ month, year })
	})

	return months
}

export function getDaysInMonth(month: number, year: number): PlainDate[] {
	const date = new Date(year, month, firstDay)
	const days: PlainDate[] = []
	while (date.getMonth() === month) {
		days.push({ day: date.getDate(), month: date.getMonth(), year: date.getFullYear() })
		date.setDate(date.getDate() + offset)
	}
	return days
}

function getAlignDays(month: number, year: number): PlainDate[] {
	const daysInFirstMonth = getDaysInMonth(month, year)
	const daysInPrevMonth = getDaysInMonth(month - offset, year)

	return daysInPrevMonth
		.slice(Math.max(daysInPrevMonth.length - toDate(daysInFirstMonth[0]).getDay(), 0))
		.concat([...daysInFirstMonth])
}

export function getDays(months: Month[]): PlainDate[] {
	let days: PlainDate[] = getAlignDays(months[0].month, months[0].year)

	for (let i = offset; i < months.length; i++) {
		const { month, year } = months[i]
		days = days.concat(getDaysInMonth(month, year))
	}

	return days
}

export function getDaysWithOffset(days: PlainDate[], direction: 'past' | 'future', monthOffset?: number): PlainDate[] {
	let buff: PlainDate[] = []

	while (days[0].day !== firstDay) {
		days.shift()
	}

	const [firstDayInMonth] = days
	const lastDay = days[days.length]

	if (direction === 'past') {
		while (days[days.length].month === lastDay.month) {
			days.pop()
		}

		enumerateMonths(
			firstDayInMonth.month,
			firstDayInMonth.year,
			'past',
			monthOffset ?? offset,
			(m, y) => buff = getDaysInMonth(m, y).concat(buff),
		)

		return getAlignDays(buff[0].month, buff[0].year).concat(buff.concat(days))
	}

	while (days[0].month === firstDayInMonth.month) {
		days.shift()
	}

	enumerateMonths(lastDay.month, lastDay.year, 'future', monthOffset ?? offset, (m, y) => {
		buff = buff.concat(getDaysInMonth(m, y))
	})

	return getAlignDays(days[0].month, days[0].year).concat(days.concat(buff))
}

export function isDatesEqual(first: PlainDate, second: PlainDate): boolean {
	return (
		first.day === second.day &&
		first.month === second.month &&
		first.year === second.year
	)
}

export function getCurrentDate(): PlainDate {
	const date = new Date()

	return {
		day: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear(),
	}
}

export function toPlainDate(date: Date): PlainDate {
	return {
		day: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear(),
	}
}

export function toDate(plainDate: PlainDate | Month): Date {
	if ('day' in plainDate) {
		return new Date(plainDate.year, plainDate.month, plainDate.day)
	}

	return new Date(plainDate.year, plainDate.month, firstDay)
}
