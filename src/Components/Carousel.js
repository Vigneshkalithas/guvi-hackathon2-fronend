import Carousel from 'react-bootstrap/Carousel';
import { useNavigate, Link} from "react-router-dom";

function MoveItems() {

  const navigate = useNavigate();
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carousel"
          src="https://www.minfytech.com/wp-content/uploads/2021/08/Digital-Transformation-for-BookMyShow.png"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          <button type="button" className="btn btn-danger btn-lg" onClick={()=>navigate("/movies")}>Book Now</button>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel"
          src="https://www.getonecard.app/assets/offers/bookmyshow_onecard_offer.png"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel"
          src="https://dyn1.heritagestatic.com/lf?set=path%5B1%2F0%2F5%2F9%2F1%2F10591649%5D&call=url%5Bfile%3Aproduct.chain%5D"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://offerscouponsdeals.in/blog/wp-content/uploads/2019/05/Bookmyshow-refund.jpg"
        //   src="https://thedigitalyug.com/ImageStorage/cl723202115620PM514148.jpg"
        //   src="https://i.ytimg.com/vi/8ncQyNKr8Uc/maxresdefault.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default MoveItems;