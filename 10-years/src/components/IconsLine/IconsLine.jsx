import { useLocation } from "react-router-dom";
import { LineDot } from "./LineDot";
import { IconContainer } from "./IconContainer";

export const IconsLine = ({data = []}) => {
    const url = useLocation().pathname;
    
    return (
        <div id="icons-line" className="flex items-center h-32 overflow-x-scroll overflow-visible w-screen px-8 no-scrollbar z-10">
            {
                data.map( (e, index) => {
                    if (e.path == url && e.path != "/") {
                        return  <IconContainer
                                    key={index + "" + e.path} 
                                    imgURL={e.urlPath}
                                    label={`Dia ${data.indexOf(e) + 1}`} 
                                    start={data.indexOf(e) == 0}
                                    accessible={e.path != "/"}
                                    path={e.path}/>
                                    
                    } else {
                        return  <LineDot
                                    key={index + "" + e.path} 
                                    label={`Dia ${data.indexOf(e) + 1}`} 
                                    start={data.indexOf(e) == 0}
                                    accessible={e.path != "/"}
                                    path={e.path}/>
                    }
                }
                )
            }
        </div>
    );
}