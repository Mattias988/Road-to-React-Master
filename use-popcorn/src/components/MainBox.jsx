import {useState} from "react";

export default function MainBox({children}) {
    return (
            <main className="main">
               {children}
            </main>
    )
}

