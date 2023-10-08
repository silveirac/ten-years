import { useNavigate } from "react-router-dom"

export const LineDot = ({start, accessible, label, path}) => {
    const navigate = useNavigate();

    return (
        <>
            {
                !start && <div className={`border-2 min-w-[80px] h-0 border-white`}/>
            }
                <div className={`relative h-6 aspect-square rounded-full bg-white ${accessible && "outline outline-4 outline-white outline-offset-4 mx-1 cursor-pointer"}` } onClick={() => navigate(path)}>
                    { label && <p className="absolute font-playfare text-white top-9 w-16 -left-1">{label}</p>}
                </div>
        
        </>
    )
}