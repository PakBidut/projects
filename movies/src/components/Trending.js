import { Card, Col, Container, Row, Image } from "react-bootstrap"
import axios from "axios"
import { useState,useEffect } from "react"

const Trending = () => {

    const [movies,Setmovies] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie", {
            params : {
                api_key : "f88493f17ab407f32e0a0d22a2e84f3c"
            }
        }).then((res) => {
            Setmovies(res.data.results)
        })
    }, [])


  return (
      <div>
          <Container>
              <br />
              <br />
              <h1 className="text-white">Trending Movies</h1>
              <Row>
                  {/* mapping belum kelar */}
                  {movies.map((res,index) => {
                      return(
                        <Col md={4} className="movieWrapper" id="trending" key={index}>
                        <Card className="text-white movieImage bg-dark">
                            <Image src={"blabla"} alt="Card image" className="images"/>
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Joker</Card.Title>
                                <Card.Text className="text-left">
                                Lorem
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                  </Col>
                      )
                  })}
              </Row>
          </Container>
      </div>
    
  )
}

export default Trending