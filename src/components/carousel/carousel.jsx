import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Auto Banner</h5>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Návrh stránky</h5>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Banner nabídky</h5>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;