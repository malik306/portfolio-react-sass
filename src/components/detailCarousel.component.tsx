import { useState, useEffect } from "react";
export default function DetailCarousel() {
    const loremIpsum = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam quisquam illo tempora qui, sapiente facilis rerum vero dolore voluptatum?";
    const [carouselData, setCarouselData] = useState([
        { id: 1, title: "front end development", detail: loremIpsum }, { id: 2, title: "web design", detail: loremIpsum },
        { id: 3, title: "back end development", detail: loremIpsum }, { id: 4, title: "project management", detail: loremIpsum },
        { id: 5, title: "python development", detail: loremIpsum }, { id: 6, title: "javascript & typescript development", detail: loremIpsum },
    ]);
    const [carouselInit, setCarouselInit] = useState(0);
    const [carousel, setCarousel] = useState(document.getElementsByClassName('what__detail__carousel__inner__item'));
    const [carouselNav, setCarouselNav] = useState(document.getElementsByClassName('what__detail__carousel__indicator'));
    const dots = carouselNav.length;
    const carouselSlides = Array.from(carousel);
    const carouselCtrlNext = () => {
        console.log('Works Next',carousel[0].getBoundingClientRect().width);
    }
    const carouselCtrlPrev = () => {
        console.log('Works Prev');
    }
    // useEffect(() => {
    //     for (let i = 0; i < carousel.length; i++) {
    //       carouselSlides[i].style.left = `${carousel[i].getBoundingClientRect().width * i + 'px'}`;
    //     }
    // });
    return (
        <>
            <div className="what__detail__carousel what__detail__carousel--slide">
                <div className="what__detail__carousel__inner">
                    {carouselData.map(itemData => (
                        <div className="what__detail__carousel__inner__item" key={itemData.id}>
                            <img src="https://fakeimg.pl/240x160" alt={itemData.title} />
                            <div className="what__detail__carousel__inner__item--caption">
                                <h3>{itemData.title}</h3>
                                <p>{itemData.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="what__detail__carousel__ctrl">
                    <button className="what__detail__carousel__ctrl--prev" onClick={carouselCtrlPrev}>
                        <i className="fas fa-2x fa-chevron-circle-left"></i>
                    </button>
                    <button className="what__detail__carousel__ctrl--next" onClick={carouselCtrlNext}>
                        <i className="fas fa-2x fa-chevron-circle-right"></i>
                    </button>
                </div>

                <ol className="what__detail__carousel__indicator">
                    <li className=""></li>
                    <li className=""></li>
                </ol>
            </div>
        </>
    );
}