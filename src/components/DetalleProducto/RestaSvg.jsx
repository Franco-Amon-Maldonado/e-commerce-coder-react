function RestaSvg({cantidad}) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" className={`${cantidad <= 1 ? "bg-gray-500" : "bg-red-500"} rounded-lg`} viewBox="0 0 256 256">
			<path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" />
		</svg>
	)
}

export default RestaSvg
