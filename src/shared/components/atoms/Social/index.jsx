import { ReactComponent as Telegram } from "/src/assets/svg/social/telegram.svg"
import { ReactComponent as Facebook } from "/src/assets/svg/social/facebook.svg"
import { ReactComponent as Instagram } from "/src/assets/svg/social/instagram.svg"
import { ReactComponent as Twitter } from "/src/assets/svg/social/twitter.svg"
import { ReactComponent as Vk } from "/src/assets/svg/social/vk.svg"
import React from "react"

export function Social() {
	return (
		<div className="flex flex-row gap-4 py-4 mt-0 lg:mt-[40px]">
			<a className="w-auto" href="#">
				<div className="fill-secondary bg-white hover:bg-gradient-instagram hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">
					<Instagram />
				</div>
			</a>

			<a className="w-auto" href="#">
				<div className="fill-secondary bg-white hover:bg-facebook hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">
					<Facebook />
				</div>
			</a>

			<a className="w-auto" href="#">
				<div className="fill-secondary bg-white hover:bg-twitter hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">
					<Twitter />
				</div>
			</a>

			<a className="w-auto" href="#">
				<div className="fill-secondary bg-white hover:bg-vk hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">
					<Vk />
				</div>
			</a>

			<a className="w-auto" href="#">
				<div className="fill-secondary bg-white hover:bg-telegram hover:fill-white rounded-full w-10 h-10 flex items-center justify-center">
					<Telegram />
				</div>
			</a>

		</div>
	)
}
