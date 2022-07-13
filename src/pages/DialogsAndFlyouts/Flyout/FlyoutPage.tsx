import React, { useState } from 'react'
import { CodeExample } from '../../../components/CodeExample/CodeExample'
import { Button, Flyout, TitleBlock } from '../../../lib'

type Position = 'bottom' | 'top' | 'left' | 'right'

export const FlyoutPage = (): React.ReactElement => {
	const [position, setPosition] = useState<Position>('bottom')
	const [open, setIsOpen] = useState(false)

	return (
		<div>
			<TitleBlock>Flyout</TitleBlock>

			<CodeExample
				rightBlock={(
					<div>
						<select onChange={e => setPosition(e.currentTarget.value as Position)}>
							<option value="left">left</option>
							<option value="right">right</option>
							<option value="bottom">bottom</option>
							<option value="top">top</option>
						</select>
					</div>
				)}
			>
				<Flyout
					visible={open}
					flyoutContent="This is flyout content"
					flyoutPosition={position}
				>
					<Button onClick={() => setIsOpen(o => !o)}>
                        Open flyout
					</Button>
				</Flyout>
			</CodeExample>
		</div>
	)
}
