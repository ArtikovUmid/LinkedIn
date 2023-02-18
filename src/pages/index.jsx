import { BrowserRouter, Route, Routes } from "react-router-dom"
import {MainPage} from "./Main"
import {People} from "./People"
import {Notification} from "./Notification"
import {Chat} from "./Chat"
import {Job} from "./Job"
import {Home} from "./Home"
import React from "react"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/" element={<Home />} />
				<Route path="/people" element={<People />} />
				<Route path="/job" element={<Job />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/notification" element={<Notification />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
