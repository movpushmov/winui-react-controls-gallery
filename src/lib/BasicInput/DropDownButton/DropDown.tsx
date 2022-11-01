import styles from './dropdown.module.css'
import React, { useCallback } from 'react'
import { Icon, IconType } from '../../Icons/Icon'
import { TextBlock } from '../../Text/Text/TextBlock'
import { DropDownItem } from './DropDownButton'
import { useOuterClick } from '../../utils/useOuterClick'
import { Button } from '../Button/Button'

interface DropDownProps {
	visible: boolean
	close?: (e: Event) => void

	ref?: React.Ref<HTMLElement>

	onSelect?: (value: any) => void

	items?: (DropDownItem | React.ReactElement)[]
	emptyMessage: string
}

export function DropDown(props: DropDownProps): React.ReactElement {
	const ref = useOuterClick(e => {
		if (props.visible) {
			props.close?.(e)
		}
	})

	const handler = useCallback((e: React.MouseEvent<HTMLElement>, i: DropDownItem | React.ReactElement) => {
		props.onSelect?.(i)
		props.close?.(e as unknown as Event)
	}, [props])

	return (
		<div className={styles['dropdown-menu']} ref={ref}>
			{props.visible ?
				<div className={styles['dropdown-content']}>
					{props.items && props.items.length ?
						props.items.map((i, index) => {
							if (React.isValidElement(i)) {
								return i
							}

							return (
								<Button
									className={styles['dropdown-item']}
									onClick={e => {
										handler(e, i)
									}}
									key={index}
									type="unstyled"
								>
									{i.icon ? <Icon type={i.icon} style={{ marginRight: '8px' }} /> : null}

									<TextBlock type="body">{i.name}</TextBlock>
								</Button>
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
