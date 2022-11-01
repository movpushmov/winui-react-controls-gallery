import React from 'react'
import styles from '../SplitButton/styles.module.css'
import { Icon, IconType } from '../../Icons/Icon'
import { DropDown } from '../DropDownButton/DropDown'
import { ToggleButton } from '../ToggleButton/ToggleButton'
import { SplitButtonProps } from '../SplitButton/SplitButton'
import { useButtonLogic } from './useButtonLogic'
import classNames from 'classnames'

export interface DropDownButtonProps extends Omit<SplitButtonProps, 'disabled'> {
	initialValue?: boolean
	value?: boolean

	onToggle?: (value: boolean) => void
	emptyMessage?: string

	disabled?: boolean | {
		disableBaseButton?: boolean
		disabledDropdownButton?: boolean
	}
}

export function ToggleSplitButton(props: DropDownButtonProps): React.ReactElement {
	const defaultProps = Object.assign({
		items: [],
		emptyMessage: 'Nothing to see',
	}, props)

	const {
		items,
		onSelect,
		className,
		children,
		onClick,
		emptyMessage,
		disabled,
		...otherProps
	} = defaultProps

	const buttonLogic = useButtonLogic(defaultProps)

	const isBaseButtonDisabled = typeof props.disabled === 'boolean' ? props.disabled : Boolean(props.disabled?.disableBaseButton)
	const isDropDownButtonDisabled = typeof props.disabled === 'boolean' ? props.disabled : Boolean(props.disabled?.disabledDropdownButton)

	return (
		<div className={classNames(styles['dropdown'], defaultProps.className)}>
			<div className={classNames(styles['buttons-row'], className)} {...otherProps} ref={buttonLogic.ref}>
				<ToggleButton
					value={buttonLogic.toggled}
					disabled={isBaseButtonDisabled}
					onClick={buttonLogic.toggleHandler}
					className={styles['content-button']}
					style={{ borderRight: 'none' }}
				>
					{children}
				</ToggleButton>

				<ToggleButton
					value={buttonLogic.toggled}
					disabled={isDropDownButtonDisabled}
					className={classNames(styles['dropdown-button'], buttonLogic.animateIcon ? styles['animate-icon'] : void 0)}
					onClick={buttonLogic.openHandler}

					style={{
						padding: 0,
					}}
				>
					<div style={{
						width: 1,
						height: '100%',
						backgroundColor: buttonLogic.toggled ?
							'var(--control-stroke-on-accent-tertiary)' :
							'var(--control-stroke-default)',
					}}
					/>
					<Icon type={IconType.ChevronDown} style={{ padding: '4px 8px' }} />
				</ToggleButton>
			</div>

			<DropDown
				visible={buttonLogic.visible}
				close={buttonLogic.closeHandler}
				emptyMessage={emptyMessage}
				onSelect={onSelect}
				items={items}
			/>
		</div>
	)
}
