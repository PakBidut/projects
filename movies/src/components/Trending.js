import { Card, Col, Container, Row, Image } from "react-bootstrap"
import jokerImage from '../assets/trending/joker.jpg'
import morbius from '../assets/trending/morbius.jpg'
import lightyear from '../assets/trending/lightyear.jpg'

const Trending = () => {
  return (
      <div>
          <Container>
              <br />
              <br />
              <h1 className="text-white">Trending Movies</h1>
              <Row>
                  <Col md={4} className="movieWrapper" id="trending">
                        <Card className="text-white movieImage bg-dark">
                            <Image src={jokerImage} alt="Card image" className="images"/>
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Joker</Card.Title>
                                <Card.Text className="text-left">
                                Lorem
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                  </Col>
                  <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage bg-dark">
                            <Image src={morbius} alt="Card image" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Morbius</Card.Title>
                                <Card.Text className="text-left">
                                Lorem
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                  </Col>
                  <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage bg-dark">
                            <Image src={lightyear} alt="Card image" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Lightyear</Card.Title>
                                <Card.Text className="text-left">
                                Lorem
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                  </Col>
              </Row>
          </Container>
      </div>
    
  )
}

export default Trending