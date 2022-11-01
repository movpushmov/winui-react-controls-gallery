import React, { ForwardedRef } from 'react'

import styles from './styles.module.css'
import { IconProps } from '../../Icons/Icon'
import classNames from 'classnames'

export interface ButtonProps extends Omit<
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
'type' | 'ref'
> {
	disabled?: boolean
	htmlType?: 'submit' | 'reset' | 'button'

	type?: 'default' | 'accent' | 'unstyled'
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void

	iconLeft?: React.ReactElement<IconProps>
	iconRight?: React.ReactElement<IconProps>
}

export const Button = React.forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
	const defaultProps: ButtonProps = Object.assign({
		disabled: false,
		htmlType: 'button',
		type: 'default',
		className: '',
	}, props)

	const { iconLeft, iconRight, className, children, htmlType, type, ...otherProps } = defaultProps

	return (
		<button
			type={htmlType}
			ref={ref}
			{...otherProps}
			className={classNames(styles['btn' + (type === 'default' ? '' : `-${type}`)], className)}
		>
			{iconLeft || null}
			{children}
			{iconRight || null}
		</button>
	)
})
