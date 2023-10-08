import { useContext, useEffect } from "react"
import { Countdown } from "../components/Countdown/Countdown"
import { IconsLine } from "../components/IconsLine/IconsLine"
import { WaitingLogo } from "../components/WaitingLogo/WaitingLogo"
import { GlobalContext } from "../context/GlobalContext"
import { AudioPlayer } from "../components/Utilities/AudioPlayer/AudioPlayer"
import soundtrack from "/music/home.mp3"

export const HomePage = () => {
    const {globalState} = useContext(GlobalContext);

    useEffect(() => {
        document.getElementById('player').pause();
    },[])

    return (
        <div className="bg-[url('/img/bg.webp')] bg-cover h-screen w-screen flex flex-col justify-between gap-y-20 py-32">
            <AudioPlayer src={soundtrack} title={"Clair de Lune - Claude Debussy"}/>

            <WaitingLogo/>

            <Countdown 
                hasDays
                hasHours
                hasMinutes
                hasSeconds
                expectedDate={globalState.date}/>
                
            <div className="flex flex-col items-center">
                <h3 className="text-white font-playfare bg-black/30 p-2 rounded-full -mb-4">Cada dia uma nova supresa até o nosso dia!</h3>
                <IconsLine data={globalState.lineDays}/>
            </div>
        </div>
    )
}