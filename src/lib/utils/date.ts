// const
const firstDay = 1
const offset = 1
const lastDayIndex = 6
const lastMonthIndex = 11
const decade = 10

export interface Decade {
	start: number
	end: number
}

function getDays(month: number, year: number): Date[] {
	const date = new Date(year, month, firstDay)
	const days: Date[] = []

	while (date.getMonth() === month) {
		days.push(new Date(date))
		date.setDate(date.getDate() + offset)
	}

	return days
}

export function getDaysInMonth(month: number, year: number): Date[] {
	let days: Date[] = getDays(month, year)

	{
		let daysInPrevMonth: Date[] = []

		if (month === 0) {
			daysInPrevMonth = getDays(lastMonthIndex, year - offset)
		} else {
			daysInPrevMonth = getDays(month - offset, year)
		}

		days = daysInPrevMonth
			.slice(Math.max(daysInPrevMonth.length - days[0].getDay(), 0))
			.concat(days)
	}

	{
		let daysInNextMonth: Date[] = []

		if (month === lastMonthIndex) {
			daysInNextMonth = getDays(0, year + offset)
		} else {
			daysInNextMonth = getDays(month + offset, year)
		}

		if (lastDayIndex - days[0].getDay() > 0) {
			days = days.concat(daysInNextMonth.slice(0, lastDayIndex - days[days.length - offset].getDay()))
		}
	}

	return days
}

export function getMonths(locale: string): Date[] {
	const months: Date[] = []

	for (let i = 0; i <= lastMonthIndex; i++) {
		const date = new Date()
		date.setDate(offset)
		date.setMonth(i)

		months.push(new Date(date))
	}

	return months
}

const round = (n: number, to: number): number => n - n % to

export function getDecade(year: number): Decade {
	const now = new Date(year, 0, firstDay)

	const start = new Date(round(now.getFullYear(), decade), 0, offset)
	// Go to the start of the next period ...
	const end = new Date(round(now.getFullYear(), decade) + decade, 0, offset)
	end.setDate(end.getDate() - offset) // then go one day back

	return {
		start: start.getFullYear(),
		end: end.getFullYear(),
	}
}