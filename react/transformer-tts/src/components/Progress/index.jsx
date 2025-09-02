// 进度条组件

const Progress = (props) => {
    const { text, percentage } = props
    return (
        <div className="relative text-black bg-white rounded-lg text-left overflow-hidden">
            <div className="px-2 w-[1%] h-full bg-blue-500 whitespace-nowrap"
                style={{ width: `${percentage}%` }}>
                {text}   {`${percentage.toFixed(2)}%`}
            </div>
        </div>
    )
}
export default Progress