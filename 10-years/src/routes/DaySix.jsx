import { useLocation, useNavigate } from "react-router-dom";
import { IconsLine } from "../components/IconsLine/IconsLine"
import { GlobalContext } from "../context/GlobalContext"
import { useContext, useEffect } from "react"
import { QuotedString } from "../components/Utilities/QuotedString.jsx/QuotedString";
import { HomeButton } from "../components/Utilities/HomeButton/HomeButton";

export const DaySix = () => {
    const {globalState} = useContext(GlobalContext);
    const url = useLocation().pathname
    const navigate = useNavigate()

    useEffect(() => {
        globalState.lineDays[5].path == "/" ? navigate("/") : null;
    },[globalState.lineDays[5].path])

    return (globalState.lineDays[5].path != "/" && 
        <div className="bg-[url('/img/bg-daysix.webp')] bg-cover h-screen w-screen flex flex-col justify-between gap-y-20 pb-32 pt-40">
            <div className="absolute top-0 left-0 w-screen h-screen bg-black/30"/>

            <div className="flex flex-col gap-y-8">
                <QuotedString str={"Sua voz é a melodia mais bela que já ouvi!"}/>
                <iframe 
                    title="deezer-widget" 
                    src="https://widget.deezer.com/widget/dark/playlist/11854808361"
                    allowtransparency="true" 
                    allow="encrypted-media; clipboard-write"
                    className="z-10 px-4"/>
            </div>
            

            <div className="flex flex-col items-center">
                <h3 className="text-white font-playfare bg-black/30 p-2 rounded-full -mb-4 z-10">Cada dia uma nova supresa até o nosso dia!</h3>
                <IconsLine data={globalState.lineDays}/>
            </div>
            <div className="absolute bottom-20 w-full flex justify-center z-10">
                <HomeButton/>
            </div>
        </div>
    )
}