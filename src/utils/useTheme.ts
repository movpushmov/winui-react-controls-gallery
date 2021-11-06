import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const darkThemeCSSQuery = '(prefers-color-scheme: dark)'

function getTheme(): Theme {
	if (window.matchMedia && window.matchMedia(darkThemeCSSQuery).matches) {
		return 'dark'
	}

	return 'light'
}

export function useTheme(): Theme {
	const [theme, setTheme] = useState<Theme>(getTheme())

	const themeChangedHandler = useCallback((e: MediaQueryListEvent) => {
		setTheme(e.matches ? 'dark' : 'light')
	}, [])

	useEffect(() => {
		window.matchMedia(darkThemeCSSQuery)
			.addEventListener('change', themeChangedHandler)

		return () => {
			window.matchMedia(darkThemeCSSQuery)
				.removeEventListener('change', themeChangedHandler)
		}
	}, [themeChangedHandler])

	return theme
}
