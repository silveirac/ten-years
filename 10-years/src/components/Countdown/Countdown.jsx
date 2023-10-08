import { useEffect, useState } from "react";
import { CountdownPlate } from "./CountDo0wnPlate.jsx";
import { useNavigate } from "react-router-dom";

export const Countdown = ({ expectedDate, hasYears, hasMonths, hasDays, hasHours, hasMinutes, hasSeconds}) => {
    const [time, setTime] = useState({years: null, months: null, days: null, hours: null, minutes: null, seconds: null})
    const navigate = useNavigate()
    
    const updateTime = () => {
        const date = new Date(expectedDate);
        const now = new Date()

        const newTime = {
            years: date.getFullYear() - now.getFullYear(),
            months: date.getMonth() - now.getMonth() - 1,
            days: date.getDate() - now.getDate() - 1,
            hours: (date.getHours() - now.getHours()) + 23,
            minutes: (date.getMinutes() - now.getMinutes()) + 59,
            seconds: (date.getSeconds() - now.getSeconds()) + 59
        }
        setTime(newTime)

        if (newTime.years <= 0 && newTime.months <= 0 && newTime.days <= 0 && newTime.hours <= 0 && newTime.minutes <= 0 && newTime.seconds <= 0) {
            navigate('/')
        }
    }
    

    useEffect(() => {
        setInterval(updateTime, 1000)
    }, [])

    return (new Date() < new Date(expectedDate) &&
        <div>
            <h2 className="text-center text-white text-xl mb-4 font-playfare">Faltam</h2>
            {
                time && 
                <div className="flex justify-center gap-2">
                    { hasYears && <CountdownPlate number={time.years} label={"Anos"}/> }
                    { hasMonths && <CountdownPlate number={time.months} label={"Meses"}/> }
                    { hasDays && <CountdownPlate number={time.days} label={"Dias"}/> }
                    { hasHours && <CountdownPlate number={time.hours} label={"Horas"}/> }
                    { hasMinutes && <CountdownPlate number={time.minutes} label={"Minutos"}/> }
                    { hasSeconds && <CountdownPlate number={time.seconds} label={"Segundos"}/> }
                </div>
            }
        </div>
    )
}