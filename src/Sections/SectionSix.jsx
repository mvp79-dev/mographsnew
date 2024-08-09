import React from "react";

export const SectionSix = () => {
    return (
        <section className="section six" >
            <div className="six-content" >  
                <h1 className="six-main" >All Niches</h1>
                <p className="six-description" >Not only do we do long form, but we also do short form content.</p>
            </div>
                        <div className="videos" >
    <video className="video" autoPlay muted loop >
        <source src="/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <video className="video" autoPlay muted loop >
        <source src="/vid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <video className="video" autoPlay muted loop >
        <source src="/vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>
        </section>
    )
}