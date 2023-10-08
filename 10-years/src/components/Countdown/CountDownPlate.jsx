export const CountdownPlate = ({number, label}) => {
    return (
        <div className="flex flex-col justify-end items-center w-16 h-16 bg-black/30 text-white rounded-md font-light">
            <p className="text-3xl">{number}</p>
            <p className="text-xs pb-1">{label}</p>
        </div>
    )
}