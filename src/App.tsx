import React, { useState } from 'react'
import './lib/winui.css'
import { NavigationBar } from './components/NavigationView'
import { Route, Switch } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ButtonPage } from './pages/BasicInput/Button/ButtonPage'
import { DropdownButtonPage } from './pages/BasicInput/DropdownButton/DropdownButtonPage'
import { HyperlinkButtonPage } from './pages/BasicInput/HyperlinkButton/HyperlinkButtonPage'
import { ToggleButtonPage } from './pages/BasicInput/ToggleButton/ToggleButtonPage'
import { SplitButtonPage } from './pages/BasicInput/SplitButton/SplitButtonPage'
import { CheckBoxPage } from './pages/BasicInput/CheckBox/CheckBoxPage'
import { ContentDialogPage } from './pages/DialogsAndFlyouts/ContentDialog/ContentDialogPage'

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
				<Switch>
					<Route path="/BasicInput/Button"><ButtonPage/></Route>
					<Route path="/BasicInput/DropdownButton"><DropdownButtonPage/></Route>
					<Route path="/BasicInput/HyperlinkButton"><HyperlinkButtonPage/></Route>
					<Route path="/BasicInput/ToggleButton"><ToggleButtonPage/></Route>
					<Route path="/BasicInput/SplitButton"><SplitButtonPage/></Route>
					<Route path="/BasicInput/CheckBox"><CheckBoxPage/></Route>


					<Route path="/DialogsAndFlyouts/ContentDialog"><ContentDialogPage/></Route>
				</Switch>
			</div>
		</div>
	)
}

export default App
