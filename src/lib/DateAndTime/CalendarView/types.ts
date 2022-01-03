export interface CalendarViewProps {
	identifier?: 'gregorian'
	selectionMode?: 'single' | 'none' | 'multiply'

	isGroupLabelVisible?: boolean
	isOutOfScopeEnabled?: boolean

	config?: CalendarViewConfig
}

export interface TranslationVariant {
	fullName: string
	shortName: string
}

export interface CalendarViewConfig {
	days: {
		monday: TranslationVariant
		tuesday: TranslationVariant
		wednesday: TranslationVariant
		thursday: TranslationVariant
		friday: TranslationVariant
		sunday: TranslationVariant
		saturday: TranslationVariant
	}

	months: {
		january: TranslationVariant
		february: TranslationVariant
		march: TranslationVariant
		april: TranslationVariant
		may: TranslationVariant
		june: TranslationVariant
		july: TranslationVariant
		august: TranslationVariant
		september: TranslationVariant
		october: TranslationVariant
		november: TranslationVariant
		december: TranslationVariant
	}
}
