import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/Logo.PNG";
import { useNavigate } from "react-router-dom";
import { Data } from "../Main";
import { useContext } from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainNavbar() {
  const navigate = useNavigate();
  const { login, setLogin, setSearch, loginUser, setCart } = useContext(Data);
  const logout = () => {
    setCart([]);
    setLogin(false);
    navigate("/");
    toast.error("Logged out");
  };
  return (
    <Navbar expand="md" className="navbar/ is-fixed-top is-transparent">
      <Container fluid>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="logo" src={Logo} alt="E90" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: "100%" }}
            navbarScroll
          >
            <Nav.Link className="CLASSS" onClick={() => navigate("/")}>
              Home
            </Nav.Link>
            <Nav.Link className="CLASSS" onClick={() => navigate("/shop")}>
              Shop
            </Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/men")}>
                Men
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/women")}>
                Women
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/kids")}>
                Kids
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="User" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/signin")}>
                SignIn
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/login")}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/adminlogin")}>
                Admin
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link>Link</Nav.Link> */}
          </Nav>
          <Nav>
            {login === false ? (
              <Nav.Link className="loginbtn" onClick={() => navigate("/login")}>
                Login
              </Nav.Link>
            ) : (
              <>
                <Nav.Link className="text-success">
                  {loginUser.userName}
                  <CgProfile />
                </Nav.Link>
                <Nav.Link className="text-danger" onClick={logout}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>

          <Form className="d-flex">
            <Button
              variant="outline-secondary"
              onClick={() => navigate("/cart")}
            >
              Cart
            </Button>
            <div>
              <GoHeart size={20} className="wishlist mx-2" />
            </div>

            {/* <FaCartArrowDown /> */}
            <FontAwesomeIcon icon="fa-regular fa-heart" />
            <FontAwesomeIcon icon="fa-solid fa-heart" />

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(evt) => setSearch(evt.target.value)}
            />
            <Button
              variant="outline-secondary"
              onClick={() => navigate("/search")}
              className="search"
            >
              Search
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => navigate("/adminlogin")}
              className="search"
            >
              Admin
            </Button>
            <br />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
