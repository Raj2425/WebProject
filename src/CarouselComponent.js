import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={500} style={{height:450}}>
        <img
          className="d-block w-100"
          src="images\food1.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{height:450}}>
        <img
          className="d-block w-100"
          src="images\food3.jpg"
          alt="Second slide"
          style={{objectFit:"contain"}}
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{height:450}}>
        <img
          className="d-block w-100"
          src="images\coffeebg.jpg"
          alt="Third slide"
          
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;