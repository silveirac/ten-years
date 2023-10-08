import { createContext, useEffect, useState, useReducer } from "react"

// ESTADO INCIAL DO CONTEXTO GLOBAL
const initialState = {
    date: "2023-10-11 GMT-0300",
    lineDays: [
        {path:"/one", urlPath: "/img/icon-dayone.svg", soundtrack: "music/one.mp3", stTitle: "Hero - Hans Zimmer (Kung Fu Panda Soundtrack)"},
        {path:"/two", urlPath: "/img/icon-daytwo.svg", soundtrack: "music/two.mp3", stTitle: "Not So Romantic Flight - Epic Majestic Orchestral"},
        {path:"/three", urlPath: "/img/icon-dayone.svg"},
        {path:"/four", urlPath: "/img/icon-dayone.svg"},
        {path:"/five", urlPath: "/img/icon-dayone.svg"},
        {path:"/six", urlPath: "/img/icon-dayone.svg"},
        {path:"/seven", urlPath: "/img/icon-dayone.svg"},
        {path:"/eight", urlPath: "/img/icon-dayone.svg"},
        {path:"/nine", urlPath: "/img/icon-dayone.svg"},
        {path:"/ten", urlPath: "/img/icon-dayone.svg"}
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