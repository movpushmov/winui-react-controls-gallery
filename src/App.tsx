import React, { useState } from 'react'
import './lib/winui.css'
import { NavigationBar } from './components/NavigationView'
import { Route, Routes } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ButtonPage } from './pages/BasicInput/Button/ButtonPage'
import { DropdownButtonPage } from './pages/BasicInput/DropdownButton/DropdownButtonPage'
import { HyperlinkButtonPage } from './pages/BasicInput/HyperlinkButton/HyperlinkButtonPage'
import { ToggleButtonPage } from './pages/BasicInput/ToggleButton/ToggleButtonPage'
import { SplitButtonPage } from './pages/BasicInput/SplitButton/SplitButtonPage'
import { CheckBoxPage } from './pages/BasicInput/CheckBox/CheckBoxPage'
import { ContentDialogPage } from './pages/DialogsAndFlyouts/ContentDialog/ContentDialogPage'
import { CalendarViewPage } from './pages/DateAndTime/CalendarView/CalendarViewPage'
import { FlyoutPage } from './pages/DialogsAndFlyouts/Flyout/FlyoutPage'
import { ToggleSwitchPage } from './pages/BasicInput/ToggleSwitch/ToggleSwitchPage'
import { ToggleSplitButtonPage } from './pages/BasicInput/ToggleSplitButton/ToggleSplitButtonPage'
import { SliderPage } from './pages/BasicInput/Slider/SliderPage'

function App(): React.ReactElement {
	const { t } = useTranslation()
	const [open, setIsOpen] = useState(true)

	return (
		<div className="page-container">
			<NavigationBar setIsOpen={setIsOpen} />

			<div
				style={open ?
					{ margin: '32px 48px 32px 348px', transition: '.1s ease', flex: 1 } :
					{ margin: '32px 48px 32px 96px', transition: '.1s ease', flex: 1 }
				}>
				<Routes>
					<Route path="/BasicInput/Button" element={<ButtonPage/>}/>
					<Route path="/BasicInput/DropdownButton" element={<DropdownButtonPage/>}/>
					<Route path="/BasicInput/HyperlinkButton" element={<HyperlinkButtonPage/>}/>
					<Route path="/BasicInput/ToggleButton" element={<ToggleButtonPage/>}/>
					<Route path="/BasicInput/SplitButton" element={<SplitButtonPage/>}/>
					<Route path="/BasicInput/CheckBox" element={<CheckBoxPage/>}/>
					<Route path="/BasicInput/ToggleSwitch" element={<ToggleSwitchPage/>}/>
					<Route path="/BasicInput/ToggleSplitButton" element={<ToggleSplitButtonPage/>}/>
					<Route path="/BasicInput/Slider" element={<SliderPage/>}/>

					<Route path="/DialogsAndFlyouts/ContentDialog" element={<ContentDialogPage/>}/>
					<Route path="/DialogsAndFlyouts/Flyout" element={<FlyoutPage/>}/>

					<Route path="/DateAndTime/CalendarView" element={<CalendarViewPage/>}/>
				</Routes>
			</div>
		</div>
	)
}

export default App
