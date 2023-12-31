import { createContext, useEffect, useState, useReducer } from "react"

// ESTADO INCIAL DO CONTEXTO GLOBAL
const initialState = {
    date: "2023-10-11 GMT-0300",
    lineDays: [
        {path:"/one", urlPath: "/icons/icon-dayone.svg", soundtrack: "music/one.mp3", stTitle: "Hero - Hans Zimmer (Kung Fu Panda Soundtrack)"},
        {path:"/two", urlPath: "/icons/icon-daytwo.svg", soundtrack: "music/two.mp3", stTitle: "Not So Romantic Flight - Epic Majestic Orchestral"},
        {path:"/three", urlPath: "/icons/icon-daythree.png", soundtrack: "music/three.mp3", stTitle: "Tarantela Napolitana - Vicent Lemoine Et Son"},
        {path:"/four", urlPath: "/icons/icon-dayfour.svg", soundtrack: "music/four.mp3", stTitle: "Techno Syndrome (Mortal Kombat) - The Immortals"},
        {path:"/five", urlPath: "/icons/icon-dayfive.png", soundtrack: "music/five.mp3", stTitle: "We're All In This Together - High School Musical"},
        {path:"/six", urlPath: "/icons/icon-daysix.png"},
        {path:"/seven", urlPath: "/icons/icon-dayseven.png", soundtrack: "music/seven.mp3", stTitle: "Harry Potter Theme Cover - The Radical Array Project (T.R.A.P)"},
        {path:"/eight", urlPath: "/icons/icon-dayeight.png", soundtrack: "music/eight.mp3", stTitle: "You're My Home - Billy Joel"},
        {path:"/nine", urlPath: "/icons/icon-daynine.png", soundtrack: "music/nine.mp3", stTitle: "Karma - Taylor Swift"},
        {path:"/ten", urlPath: "/icons/icon-dayten.png", soundtrack: "music/ten.mp3", stTitle: "Photograph - Ed Sheeran"}
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LINE_DAYS":
            return {...state, lineDays: action.payload}
        default:
            break;
    }
}

// INICIALIZAR CONTEXTO GLOBAL
const GlobalContext = createContext ();

// INSTANCIAR PROVIDER
const GlobalProvider = ({children}) => {
    const [globalState, globalDispatch] = useReducer(reducer, initialState);
    const [isDate, setIsDate] = useState(false)

    const allowAccess = () => {
        let msToDay = 1000 * 60 * 60 * 24;
        let temp = initialState.lineDays;
        temp.map(e => new Date().valueOf() < (new Date(globalState.date).valueOf() + (msToDay * temp.indexOf(e))) ? e.path = "/" : null)
        globalDispatch({type: "SET_LINE_DAYS", payload: temp})
    }

    useEffect(() => {
        allowAccess()
    },[])

    return (
        <GlobalContext.Provider value={{ globalState, globalDispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }