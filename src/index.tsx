import React from 'react'
import App from './App'
import reportWebVitals from './reportWebVitals'

import ru from './resources/ru.json'
import en from './resources/en.json'

import './index.css'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

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

const root = createRoot(document.getElementById('root')!)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
