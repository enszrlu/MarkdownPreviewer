import Markdown from "marked-react";
import { FaFreeCodeCamp } from "react-icons/fa";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

export default function Previewer ({value,onFullscreen, fullScreen=true}) {
    return (
        <div id="previewDiv">
            <div className="toolbar">
                <h1 className="headerText"><FaFreeCodeCamp />Previewer</h1>
                {fullScreen ? <AiOutlineFullscreen className="sizeIconPreviewer" onClick={onFullscreen}/> : <AiOutlineFullscreenExit className="sizeIconPreviewer" onClick={onFullscreen}/>}
            </div>
            <div className="Markdown" id="preview">
                <Markdown className="Markdown" value ={value} gfm ={true} breaks ={true} />
            </div>
        </div>
    )
}