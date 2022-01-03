import { useEffect, useState } from 'react'

export const useIntersection = (element: HTMLElement, rootMargin: string): boolean => {
	const [isVisible, setState] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					console.log('int')
				}
				setState(entry.isIntersecting)
			}, { rootMargin },
		)

		if (element) {
			observer.observe(element)
		}

		return () => {
			if (element) {
				observer.unobserve(element)
			}
		}
	}, [element, rootMargin])

	return isVisible
}
