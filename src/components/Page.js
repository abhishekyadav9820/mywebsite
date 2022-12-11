import { React, useLayoutEffect } from "react";
import "../CSS/Page.css";

const Page = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <section className='UnderCunstruction'>
                <div id="backgroundImage" />
                <div className="hide" id="backgroundImage1" />
                <div className="show" id="backgroundImage2" />
                <div className="ovarlay" />
                <div className="infoText">
                    UNDER CONSTRUCTION
                    <span>Dr Dilip Raja</span>
                </div>
            </section>

        </>

    )
}

export default Page
