import type { SyntheticEvent } from "react";

export default function ReactOnClock(){
    const onClick = (e: SyntheticEvent) => {
        const {isTrusted, target, bubbles} = e;
        console.log('Click Occures On <button>', isTrusted, target, bubbles);
    }

    return (<div>
        <p>ReActOnClick</p>
        <button onClick={onClick}>ClickMe</button>
    </div>);
}