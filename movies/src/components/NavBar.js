import {Navbar, Container, Nav} from 'react-bootstrap' 


const NavBar = () => {
  return (
      <div>
        <Navbar variant='dark'>
            <Container>
                <Navbar.Brand href='/'>iMOVIES</Navbar.Brand>
                <Nav>
                    <Nav.Link href='#trending'>Trending</Nav.Link>
                    <Nav.Link href='#superhero'>Superhero</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </div>
  )
}

export default NavBar;