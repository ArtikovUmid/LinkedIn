import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import App from "./pages"
import "./assets/css/index.css"
import "swiper/css"
import "./i18n"


ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
)