import React from "react"
import {ReactComponent as Logo} from "/src/assets/svg/header/Original.svg"
import {ReactComponent as Search} from "/src/assets/svg/header/search.svg"
import {ReactComponent as People} from "/src/assets/svg/header/people.svg"
import {ReactComponent as Notification} from "/src/assets/svg/header/notification.svg"
import {ReactComponent as Job} from "/src/assets/svg/header/job.svg"
import {ReactComponent as Home} from "/src/assets/svg/header/home.svg"
import {ReactComponent as Chat} from "/src/assets/svg/header/chat.svg"

export const Header = () => {
	return (
		<header className="font-roboto w-full max-w-7xl mx-auto py-5 flex flex-row gap-3  items-center">
			<a href="/" className="w-[45px] h-[45px]  hover:pointer-events-auto">
				<Logo />
			</a>
			<form action="" className="w-full max-w-xl flex flex-row gap-3 items-center border bg-gray-50 rounded-full px-8 py-4  ">
				<div>
					<Search />
				</div>
				<input type="text" placeholder="Search Jobs" className="w-full h-full outline-none bg-gray-50 placeholder:text-secondary border-gray-50  font-normal  focus:bg-white focus:border-indigo-600"/>
			</form>
			<nav className="flex flex-row gap-3 items-center justify-center">
				<a href="/" className="bg-primary h-12 w-12 flex justify-center items-center rounded-2xl  "><Home/></a>
				<a href="/people" className="bg-primary opacity-75 h-12 w-12 flex justify-center items-center rounded-2xl "><People/></a>
				<a href="/job" className="bg-primary opacity-75 h-12 w-12 flex justify-center items-center rounded-2xl "><Job/></a>
				<a href="/chat" className="bg-primary opacity-75 h-12 w-12 flex justify-center items-center rounded-2xl "><Chat/></a>
				<a href="/notification" className="bg-primary opacity-75 h-12 w-12 flex justify-center items-center rounded-2xl "><Notification/></a>
			</nav>
			<div>

			</div>
		</header>
	)
}
