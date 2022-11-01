import React, { useCallback, useEffect, useRef, useState } from 'react'
import { DropDownButtonProps } from './ToggleSplitButton'

interface UseButtonLogicResult {
	toggled: boolean
	visible: boolean
	animateIcon: boolean

	closeHandler: (e: Event) => void
	openHandler: () => void
	forceClose: () => void
	toggleHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
	ref?: React.RefObject<HTMLDivElement>
}

type PropsType = {
	items: never[]
	emptyMessage: string
} & DropDownButtonProps

export function useButtonLogic(props: PropsType): UseButtonLogicResult {
	const [toggled, setIsToggled] = useState(
		props.value ?? Boolean(props.initialValue),
	)
	const [visible, setIsVisible] = useState(false)
	const [animateIcon, setIsAnimateIcon] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setIsAnimateIcon(false)

		if (visible) {
			setIsAnimateIcon(true)
		}
	}, [visible])

	useEffect(() => {
		if (!props.disabled && props.onToggle) {
			props.onToggle(toggled)
		}
	},[toggled, props])

	const toggleHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		if (props.onClick) {
			props.onClick(e)
		}

		if (props.value === void 0) {
			setIsToggled(t => !t)
		}

	}, [props])

	const openHandler = useCallback(() => {
		if (!visible) {
			setIsVisible(true)
		}
	}, [visible])
	const closeHandler = useCallback((e: Event) => {
		if (visible && !ref.current?.contains(e.target as HTMLElement)) {
			setIsVisible(false)
		}
	}, [visible])

	const forceClose = useCallback(() => setIsVisible(false), [])

	return {
		toggled,
		visible,
		animateIcon,
		forceClose,
		toggleHandler,
		closeHandler,
		openHandler,
		ref,
	}
}
