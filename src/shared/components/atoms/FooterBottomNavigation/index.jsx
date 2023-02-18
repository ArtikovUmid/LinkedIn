import classNames from "classnames"
import {Link} from "react-router-dom"
import React from "react"

export const FooterBottomNavigation = ({
	title="Home",
	onClick,
	isVisible=false,
	links=[]
})=>{
	return(
		<div className="flex flex-col items-left justify-center gap-4">
			<h4 className="text-3xl font-worksans text-maintext font-semibold text-center md:text-left" onClick={onClick}>{title}</h4>
			<ul className={classNames(isVisible?"flex":"hidden", "md:flex flex-col font-worksans text-normal text-secondary-200 gap-2 text-center md:text-left")}>
				{links.map((item,index)=>(
					<li key={index} className="hover:text-maintext">
						<Link to={item.link}>{item.label}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
