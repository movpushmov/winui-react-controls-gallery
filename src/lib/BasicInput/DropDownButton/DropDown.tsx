import styles from './dropdown.module.css'
import React from 'react'
import { Icon, IconType } from '../../Icons/Icon'
import { TextBlock } from '../../Text/Text/TextBlock'
import { DropDownItem } from './DropDownButton'
import { useOuterClick } from '../../utils/useOuterClick'

interface DropDownProps {
	visible: boolean
	close?: () => void

	ref?: React.Ref<HTMLDivElement>

	onSelect?: (value: any) => void

	items?: DropDownItem[] | React.ReactElement[]
	buttonRef?: React.RefObject<HTMLButtonElement | null>
	emptyMessage: string
}

function prepareClickHandler(
	i: DropDownItem | React.ReactElement,
	onClose?: () => void,
	onSelect?: (value: any) => void,
) {
	return () => {
		onSelect?.(i)
		onClose?.()
	}
}

export function DropDown(props: DropDownProps): React.ReactElement {
	const ref = useOuterClick(e => {
		if (props.visible) {
			if (props.buttonRef && props.buttonRef.current?.contains(e.target as HTMLElement)) {
				return
			}

			props.close?.()
		}
	})

	return (
		<div className={styles['dropdown-menu']} ref={ref}>
			{props.visible ?
				<div className={styles['dropdown-content']}>
					{props.items && props.items.length ?
						props.items.map((i, index) => {
							if (React.isValidElement(i)) {
								return i
							}

							const handler = prepareClickHandler(i, props.close, props.onSelect)

							return (
								<div
									className={styles['dropdown-item']}
									onClick={handler}
									key={index}
								>
									{i.icon ? <Icon type={i.icon} style={{ marginRight: '8px' }} /> : null}

									<TextBlock type="body">{i.name}</TextBlock>
								</div>
							)
						})
						:
						<TextBlock>
							<Icon type={IconType.Warning} />

							{props.emptyMessage}
						</TextBlock>
					}
				</div>
				: null}
		</div>
	)
}
