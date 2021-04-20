
import React from 'react'
import './main.css'
import SimpleSlider from './landing page carousels/StoryCarousel'

const colElements = [{

    url: "/user.png",
    name: "verified",
    para: "100% Verified User"
}, {
    url: "quality.png",
    name: "users",
    para: "100000+ trusted User"

}, {
    url: "/protection.png",
    name: "protect",
    para: "Privacy Protection "

}]
function Main() {
    return (
        <div>
            <section className="main-elements">
                <div className="rows">
                    {
                        colElements.map(data => {

                            return (
                                <div className="col-elements" key={data.name}>
                                    <img src={data.url} alt={data.name} />
                                    <div className={data.name}>
                                        <p> {data.para}</p>
                                    </div>
                                </div>

                            )
                        })

                    }

                    {/* <div className="col-elements">
                        <img src="/quality.png" name="" />
                        <div className="users">
                            <p> lakh+ trusted User</p>
                        </div>
                    </div>
                    <div className="col-elements">
                        <img src="/protection.png" name="" />
                        <div className="protect">
                            <p> Privacy Protection </p>
                        </div>

                    </div> */}

                </div>
                <div className="success-story">

                    <div className="story-elements">
                        <p className="stories">Few Success stories...</p>
                        <div className="carousel-element">
                            <SimpleSlider />
                        </div>

                    </div>
                </div>
                <div className="membership ">

                </div>
            </section>


        </div>
    )
}

export default Main
