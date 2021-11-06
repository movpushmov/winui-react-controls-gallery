import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import ru from './resources/ru.json'
import en from './resources/en.json'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

const resources = {
	ru: { translation: ru },
	en: { translation: en },
}

void i18next
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
		interpolation: {
			escapeValue: false,
		},
	})

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
