import { FaFreeCodeCamp } from "react-icons/fa";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

export default function Editor ({value, onChange, onFullscreen, fullScreen = true}) {
    let classNameEditorDiv = fullScreen ? "editorDiv" : "fullscreenEditorDiv";
    return (
        <div id={classNameEditorDiv}>
            <div className="toolbar">
                <h1 className="headerText"><FaFreeCodeCamp />Editor</h1>
                {fullScreen ? <AiOutlineFullscreen className="sizeIconEditor" onClick={onFullscreen}/> : <AiOutlineFullscreenExit className="sizeIconEditor" onClick={onFullscreen} />}
            </div>
            <textarea id="editor" onChange={onChange} value={value}></textarea>
        </div>
    )
}