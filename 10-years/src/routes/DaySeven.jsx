import { useLocation, useNavigate } from "react-router-dom";
import { IconsLine } from "../components/IconsLine/IconsLine"
import { AudioPlayer } from "../components/Utilities/AudioPlayer/AudioPlayer";
import { GlobalContext } from "../context/GlobalContext"
import { useContext, useEffect } from "react"
import { QuotedString } from "../components/Utilities/QuotedString.jsx/QuotedString";
import { HomeButton } from "../components/Utilities/HomeButton/HomeButton";

export const DaySeven = () => {
    const {globalState} = useContext(GlobalContext);
    const url = useLocation().pathname
    const navigate = useNavigate()

    useEffect(() => {
        document.getElementById('player').pause()
    },[])

    useEffect(() => {
        globalState.lineDays[6].path == "/" ? navigate("/") : null;
    },[globalState.lineDays[6].path])

    return (globalState.lineDays[6].path != "/" && 
        <div className="bg-[url('/img/bg-dayseven.webp')] bg-cover bg-center h-screen w-screen flex flex-col justify-between gap-y-20 pb-32 pt-64">
            <div className="absolute top-0 left-0 w-screen h-screen bg-black/30"/>
            <AudioPlayer src={globalState.lineDays.find(e => e.path == url).soundtrack} title={globalState.lineDays.find(e => e.path == url).stTitle}/>
            
            <QuotedString str={"Me surpreendo com sua capacidade de ser tantas coisas maravilhosas ao mesmo tempo! Só pode ser magia!"}/>

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