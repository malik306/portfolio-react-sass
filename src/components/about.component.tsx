import Skill from "./skill.component";
import Carousel from "./detail-carousel.component";
export default function About() {
    return (
        <>
            <div className="about">
                <div className="about__more">
                    <div className="about__more--title">
                        <h3>About Me</h3>
                    </div>
                    <div className="about__more--detail">
                        <p>To be part of my knowledge in the field of
                            computer sciences. Where I work in the
                            role of a software house to should improve the
                            front end development skills of my career,
                            I will gain and count the experience. I can
                            bring the best position in the field of front
                            end development.</p>
                    </div>
                </div>
                <Skill />
            </div>
            <div className="what">
                <div className="what__title">
                    <h3>What I Do</h3>
                </div>
                <div className="what__detail">
                    <Carousel />
                </div>
            </div>
            <div className="team">
                <div className="team__title">
                    <h3>Team Member</h3>
                </div>
                <div className="team__detail">
                </div>
            </div>
        </>
    )
}
