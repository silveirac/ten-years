import { useNavigate } from "react-router-dom"

export const IconContainer = ({imgURL, id, accessible, start, label, path}) => {
    const navigate = useNavigate();

    return (
        <>
        {
            !start && <div className={`border-2 min-w-[80px] h-0 border-white ${accessible && "mr-1"}`}/>
        }
            <div id={id} className="relative flex justify-center items-center rounded-full outline outline-4 outline-white p-2 aspect-square w-16 text-white bg-black/30 min-w-[64px] mx-1" onClick={() => navigate(path)}>
                <img src={imgURL} alt={label}/>
                { label && <p className="absolute font-playfare text-white w-16 left-4 -bottom-8">{label}</p>}
            </div>
        </>
    )
}