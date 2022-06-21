import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/images/slider/slider1.png'
import slider2 from '../../assets/images/slider/slider2.png'
import slider3 from '../../assets/images/slider/slider3.png'
import {Figure} from 'react-bootstrap'

function Slidder() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <Figure>
  <Figure.Image
    width={900}
    height={300}
    alt="171x180"
    src={slider1}
  />
  <Figure.Caption>
  <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Figure.Caption>
</Figure>
        </Carousel.Item>




      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidder;