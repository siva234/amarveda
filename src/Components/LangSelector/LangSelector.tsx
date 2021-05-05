import React, {useContext} from 'react'
import {LangContext} from "../LangWrapper/LangWrapper"

function LangSelector() {
    const context = useContext(LangContext);
    return (
        <div>
        <select value={context.locale} onChange={context.selectLangFunc}>
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="telugu">Telugu</option>
        </select>
        </div>
    )
}

export default LangSelector
