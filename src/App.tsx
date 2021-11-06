import React from 'react'
import 'winui-react/winui.css'
import 'winui-react/main.css'
import { NavigationBar } from './components/NavigationView'
import { Route, Switch } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ButtonPage } from './pages/BasicInput/ButtonPage/ButtonPage'

function App(): React.ReactElement {
	const { t } = useTranslation()

	return (
		<div className="page-container">
			<NavigationBar />

			<Switch>
				<Route path="/BasicInput/Button">
					<ButtonPage/>
				</Route>
			</Switch>
		</div>
	)
}

export default App
