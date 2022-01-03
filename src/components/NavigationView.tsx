import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router'
import { NavigationView, NavigationViewSelectEvent } from '../lib/Navigation/NavigationView/NavigationView'
import { NavigationViewItem, IconType } from '../lib'

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
			backButtonVisible={false}
			open={true}
			selectedValue={path !== '/settings' ? path : 'settings'}
			onSelect={selectHandler}
			onPaneToggle={setIsOpen}
		>
			<NavigationViewItem title="Basic Input" value="/basicInput" icon={IconType.CheckboxComposite}>
				<NavigationViewItem title="Button" value="/basicInput/Button"/>
				<NavigationViewItem title="DropdownButton" value="/basicInput/DropdownButton"/>
				<NavigationViewItem title="HyperlinkButton" value="/basicInput/HyperlinkButton"/>
				<NavigationViewItem title="ToggleButton" value="/basicInput/ToggleButton"/>
				<NavigationViewItem title="SplitButton" value="/basicInput/SplitButton"/>
				<NavigationViewItem title="ToggleSplitButton" value="/basicInput/ToggleSplitButton"/>
				<NavigationViewItem title="CheckBox" value="/basicInput/CheckBox"/>
				<NavigationViewItem title="RadioButton" value="/basicInput/RadioButton"/>
				<NavigationViewItem title="Slider" value="/basicInput/Slider"/>
				<NavigationViewItem title="ToggleSwitch" value="/basicInput/ToggleSwitch"/>
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
			<NavigationViewItem title="Date and Time" value="dateAndTime" icon={IconType.Calendar}>
				<NavigationViewItem title="CalendarView" value="/dateAndTime/CalendarView"/>
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


