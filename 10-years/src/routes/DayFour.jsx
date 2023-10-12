import { useLocation, useNavigate } from "react-router-dom";
import { IconsLine } from "../components/IconsLine/IconsLine"
import { AudioPlayer } from "../components/Utilities/AudioPlayer/AudioPlayer";
import { GlobalContext } from "../context/GlobalContext"
import { useContext, useEffect, useState } from "react"
import { HomeButton } from "../components/Utilities/HomeButton/HomeButton";

export const DayFour = () => {
    const {globalState} = useContext(GlobalContext);
    const [bg, setBg] = useState("");
    const [soundtrack, setSoundtrack] = useState()

    const url = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById('player').pause()
    },[])

    useEffect(() => {
        globalState.lineDays[3].path == "/" ? navigate("/") : null;
    },[globalState.lineDays[3].path])

    const handleClick = (bg) => {
        if (bg == "mad") {
            setBg("bg-[url('/img/bg-dayfour-mad.webp')]");
            setSoundtrack({path: "music/four-mad.mp3", title: "Ace Of Spades - Motörhead"})
            document.getElementById('player').play()
        } else {
            setBg("bg-[url('/img/bg-dayfour-cool.webp')]")
            setSoundtrack({path: "music/four-cool.mp3", title: "Raindrops Keep Fallin' On My Head - B.J.Thomas"})
            document.getElementById('player').play()
        }
    }

    return (globalState.lineDays[3].path != "/" && 
        <div className={`${bg != "" ? bg : "bg-[url('/img/bg-dayfour.webp')]"} bg-cover bg-center h-screen w-screen flex flex-col justify-between gap-y-2 pb-32 pt-60`}>
            <AudioPlayer 
                src={!soundtrack 
                        ?   globalState.lineDays.find(e => e.path == url).soundtrack
                        :   soundtrack.path} 
                title={!soundtrack
                        ?   globalState.lineDays.find(e => e.path == url).stTitle
                        : soundtrack.title}/>
            <div/>

            {
                bg == "" && <div className="w-full h-full flex z-20">
                                <a href="#" className="w-1/2 h-full" onClick={() => handleClick("mad")}/>
                                <a href="#" className="w-1/2 h-full" onClick={() => handleClick("cool")}/>   
                            </div>
            }


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