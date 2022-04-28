import { Card, Col, Container, Row, Image } from "react-bootstrap"
import antman from '../assets/superhero/antman.jpg'
import superman from '../assets/superhero/superman.jpg'
import avenger from '../assets/superhero/avenger.jpg'

const Superhero = () => {
  return (
      <div>
          <Container>
              <br />
              <br />
              <h1 className="text-white">Superhero Movies</h1>
              <Row>
                  <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="text-white movieImage bg-dark">
                            <Image src={antman} alt="Card image" className="images"/>
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Antman</Card.Title>
                                <Card.Text className="text-left">
                                Lorem
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                  </Col>
                  <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage bg-dark">
                            <Image src={superman} alt="Card image" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Superman</Card.Title>
                                <Card.Text className="text-left">
                                Lorem
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                  </Col>
                  <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage bg-dark">
                            <Image src={avenger} alt="Card image" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Avenger</Card.Title>
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

export default Superhero