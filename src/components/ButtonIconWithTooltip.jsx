function ButtonIconWithTooltip({ icon: Icon, tooltip }) {
  return (
    <div className="relative group">
      <button className="w-8 h-8 p-1 flex items-center justify-center border border-gray-700 rounded-lg hover:border-amber-500">
        <Icon className="w-5 h-5 text-gray-700 group-hover:text-amber-500" />
      </button>
      <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap border border-amber-500 bg-gray-100 text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
        {tooltip}
      </span>
    </div>
  )
}

export default ButtonIconWithTooltip
