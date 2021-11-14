import React, { useState } from 'react'
import 'winui-react/winui.css'
import 'winui-react/main.css'
import { NavigationBar } from './components/NavigationView'
import { Route, Switch } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ButtonPage } from './pages/BasicInput/ButtonPage/ButtonPage'

function App(): React.ReactElement {
	const { t } = useTranslation()
	const [open, setIsOpen] = useState(false)

	// margin: 32px 48px;

	return (
		<div className="page-container">
			<NavigationBar setIsOpen={setIsOpen} />

			<div
				style={open ?
					{ margin: '32px 48px 32px 348px', transition: '.1s ease' } :
					{ margin: '32px 48px 32px 96px', transition: '.1s ease' }
				}>
				<Switch>
					<Route path="/BasicInput/Button">
						<ButtonPage/>
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default App
