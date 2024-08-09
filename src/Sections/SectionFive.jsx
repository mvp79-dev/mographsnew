import React from "react";

export const SectionFive = () => {
    return (
        <section className="section five" >
            <div className="background-element" />
            <div className="background-element-two" />
            <div className="five-content" >  
                <h1 className="five-main" >Recent Projects</h1>
                <p className="five-description" >Please feel free to take a moment to explore our recent projects right here!</p>
            </div>
            <div className="project-one" >
                <div className="project-text" >
                    <div className="description-thumbnail" >
                        <h1 className="descripton" >I Took a Road Trip in <br /> Luxury Cars</h1>
                        <img  className="thumbnail-image" src="/thumb3.jpg" />
                    </div>
                    <div className="project-text-image" >
                        <div className="channel-info" >
                            <img className="channel-image" src="/pfp1.jpg" />
                            <h1 className="channel-name" >Ryan Trahan</h1>
                        </div>
                        <h1 className="view-count" >8M Views</h1>
                    </div>
                </div>
            </div>
            <div className="project-two" >
            <div className="project-text" >
                    <div className="description-thumbnail" >
                        <h1 className="descripton" >SNEAKING Across The Entire UK For Free</h1>
                        <img  className="thumbnail-image-2" src="/thumb4.jpg" />
                    </div>
                    <div className="project-text-image" >
                        <div className="channel-info" >
                            <img className="channel-image" src="/pfp2.jpg" />
                            <h1 className="channel-name" >NDL</h1>
                        </div>
                        <h1 className="view-count" >4M Views</h1>
                    </div>
                </div>
            </div>
            <div className="project-three" >
            <div className="project-text" >
                    <div className="description-thumbnail" >
                        <h1 className="descripton" >Kenny Bednarek DEFENDS <br /> the 200m World Lead</h1>
                        <img  className="thumbnail-image" src="/thumb5.jpg" />
                    </div>
                    <div className="project-text-image" >
                        <div className="channel-info" >
                            <img className="channel-image" src="/pfp3.jpg" />
                            <h1 className="channel-name" >Kenny Bednarek</h1>
                        </div>
                        <h1 className="view-count" >21K Views</h1>
                    </div>
                </div>
            </div>
            <div className="project-four" >
            <div className="project-text" >
                    <div className="description-thumbnail" >
                        <h1 className="descripton" >I Trained With Olympic Athletes</h1>
                        <img  className="thumbnail-image-4" src="/thumb6.jpg" />
                    </div>
                    <div className="project-text-image" >
                        <div className="channel-info" >
                            <img className="channel-image" src="/pfp4.jpg" />
                            <h1 className="channel-name" >Jesse James West</h1>
                        </div>
                        <h1 className="view-count" >2M Views</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}