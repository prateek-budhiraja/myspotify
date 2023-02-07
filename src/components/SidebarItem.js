import React from "react";

function SidebarItem({ title, Icon }) {
	return (
		<div className="px-1">
			{Icon ? (
				<div className="flex cursor-pointer gap-2 hover:text-white text-gray-500">
					<Icon />
					<h4 className="h-[35px] font-semibold ">{title}</h4>
				</div>
			) : (
				<p className="px-2 mt-3 hover:text-white cursor-pointer text-gray-500">
					{title}
				</p>
			)}
		</div>
	);
}

export default SidebarItem;
