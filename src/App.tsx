import React from 'react'
import 'winui-react/winui.css'
import 'winui-react/main.css'
import { NavigationBar } from './components/NavigationView'
import { Route, Switch } from 'react-router'
import { useTranslation } from 'react-i18next'

function App(): React.ReactElement {
	const { t } = useTranslation()

	return (
		<div>
			<NavigationBar />

			<Switch>

			</Switch>
		</div>
	)
}

export default App
