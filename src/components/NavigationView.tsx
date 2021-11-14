import React, { useCallback } from 'react'
import { IconType, NavigationView, NavigationViewItem } from 'winui-react'
import { NavigationViewSelectEvent } from 'winui-react/Navigation/NavigationView/NavigationView'
import { useHistory, useLocation } from 'react-router'

interface NavigationViewProps {
	setIsOpen: (value: boolean) => void
}

const lastSymbolsLength = 1

export const NavigationBar = ({ setIsOpen } : NavigationViewProps): React.ReactElement => {
	const history = useHistory()
	const location = useLocation().pathname

	const path = location.endsWith('/') ?
		location.substring(0, location.length - lastSymbolsLength) : location

	const selectHandler = useCallback((e: NavigationViewSelectEvent) => {
		if (e.isSettings) {
			history.push('/settings')
		} else if (e.selectedValues) {
			history.push(e.selectedValues[0].toString() || '/')
		}
	}, [history])

	return (
		<NavigationView
			selectedValue={path !== '/settings' ? path : 'settings'}
			onSelect={selectHandler}
			onPaneToggle={setIsOpen}
		>
			<NavigationViewItem title="Basic Input" value="/basicInput" icon={IconType.CheckboxComposite}>
				<NavigationViewItem title="Button" value="/basicInput/Button"/>
				<NavigationViewItem title="DropdownButton" value="/basicInput/DropDownButton"/>
			</NavigationViewItem>
			<NavigationViewItem title="Collections" value="collections" icon={IconType.GridView}>
				<NavigationViewItem title="GridView" value="/collections/GridView"/>
				<NavigationViewItem title="ListView" value="/collections/ListView"/>
				<NavigationViewItem title="TreeView" value="/collections/TreeView"/>
			</NavigationViewItem>
			<NavigationViewItem title="Dialogs and Flyouts" value="/dialogsAndFlyouts" icon={IconType.Comment}>
				<NavigationViewItem title="ContentDialog" value="/dialogsAndFlyouts/ContentDialog"/>
				<NavigationViewItem title="Flyout" value="/dialogsAndFlyouts/Flyout"/>
			</NavigationViewItem>
			<NavigationViewItem title="Navigation" value="/navigation" icon={IconType.GlobalNavButton}>
				<NavigationViewItem title="BreadcrumbBar" value="/navigation/BreadcrumbBar"/>
				<NavigationViewItem title="NavigationView" value="/navigation/NavigationView"/>
			</NavigationViewItem>
			<NavigationViewItem title="Status and info" value="statusAndInfo" icon={IconType.ActionCenter}>
				<NavigationViewItem title="InfoBadge" value="infoBadge"/>
				<NavigationViewItem title="InfoBar" value="infoBar"/>
				<NavigationViewItem title="ProgressBar" value="progressBar"/>
				<NavigationViewItem title="ProgressRing" value="progressRing"/>
				<NavigationViewItem title="Tooltip" value="tooltip"/>
			</NavigationViewItem>
			<NavigationViewItem title="Text" value="text" icon={IconType.Font}>
				<NavigationViewItem title="TextBlock" value="textBlock"/>
				<NavigationViewItem title="TitleBlock" value="titleBlock"/>
				<NavigationViewItem title="TextBox" value="textBox"/>
				<NavigationViewItem title="NumberBox" value="numberBox"/>
			</NavigationViewItem>
		</NavigationView>
	)
}


