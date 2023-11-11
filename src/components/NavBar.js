import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
const NavBar = () => {
  return (
    <>
      <Navbar>
        <Link href="/" passHref>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Nav>
          <Nav.Item>
            <Link href="/about" passHref>
              About
            </Link>
          </Nav.Item>
          &nbsp;&nbsp;
          <Nav.Item>
            <Link href="/todos" passHref>
              Todos
            </Link>
          </Nav.Item>
          &nbsp;&nbsp;
          <Nav.Item>
            <Link href="/jokes/random" passHref>
              Jokes
            </Link>
          </Nav.Item>
          &nbsp;&nbsp;
          <Nav.Item>
            <Link href="/books" passHref>
              Books
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
