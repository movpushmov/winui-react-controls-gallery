import React from 'react'

import { Button } from '../../../../BasicInput/Button/Button'

import styles from './header.module.css'
import { Icon, IconType } from '../../../../Icons/Icon'
import { TextBlock } from '../../../../Text/Text/TextBlock'

interface HeaderProps {
	currentPeriodDate: Date
	locale: string
}

export const Header = (props: HeaderProps): React.ReactElement =>
	<div className={styles['controls']}>
		<Button className={styles['timelapse-button']}>
			<TextBlock type="body-strong">
				{props.currentPeriodDate.toLocaleDateString(props.locale, { month: 'long' })}{' '}
				{props.currentPeriodDate.getFullYear()}
			</TextBlock>
		</Button>

		<Button className={styles['scroll-button']}>
			<Icon type={IconType.CaretUpSolid8} style={{ color: 'var(--fill-color-control-strong-default)' }}/>
		</Button>
		<Button className={styles['scroll-button']}>
			<Icon type={IconType.CaretDownSolid8} style={{ color: 'var(--fill-color-control-strong-default)' }}/>
		</Button>
	</div>
