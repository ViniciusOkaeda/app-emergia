import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css"
import Image4 from "../../assets/image5.png";
import Image5 from "../../assets/image6.png";
import Image6 from "../../assets/image7.png";

export const Slider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const carouselDetails = [
        {
            title: "eMergia: Medindo o Custo Energético Ambiental",
            text: "eMergia avalia toda a energia ambiental usada na produção de bens e serviços, permitindo medir o custo energético total e a sustentabilidade de sistemas com base no joule solar equivalente (seJ).",
            image: Image5
        },
        {
            title: "Sustentabilidade com Base na eMergia",
            text: "A análise emergética considera energia direta e incorporada em materiais, trabalho e ecossistemas, comparando tecnologias quanto ao uso de recursos renováveis e à eficiência ambiental.",
            image: Image6
        },
        {
            title: "Transformidade: Quanto Custa um Joule?",
            text: "Transformidade mede quanta emergia é usada para gerar uma unidade de energia. Valores altos indicam processos ecologicamente caros, úteis para avaliar o impacto ambiental de sistemas produtivos.",
            image: Image4
        },
    ]

    return(
        <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            {carouselDetails.map((item, idx) => {

                return(
                    <div 
                    key={idx} 
                    className="carouselItem" 
                    style={{
                        backgroundImage:
                        `linear-gradient(to bottom, rgba(17, 16, 20, 0.4) 0%, rgba(17, 16, 20, 0.4) 100%), url(${item.image})`, 
                        backgroundSize: 'cover',
                        objectFit: 'cover'

                    }}>
                        <div className="carouselContent">
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                            <button onClick={() => {
                                window.location.href = "/sobre"
                            }}>Saiba mais</button>
                        </div>

                    </div>
                )
            })}
        </Carousel>
    );
}

