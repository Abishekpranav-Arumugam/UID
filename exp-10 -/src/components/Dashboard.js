// src/components/Dashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button, Card, Row, Col } from "react-bootstrap";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Correct import

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout Error: ", err);
      // Optionally, set an error state to display to the user
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#" className="d-flex align-items-center">
                <FaUserCircle size={20} className="me-2" />
                {user?.email || user?.displayName}
              </Nav.Link>
              <Button variant="outline-light" onClick={handleLogout} className="ms-3">
                <FaSignOutAlt className="me-2" />
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="dashboard-background">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="text-center shadow-lg">
                <Card.Body>
                  <FaUserCircle size={80} className="mb-3 text-primary" />
                  <Card.Title className="mb-3">Welcome, {user?.email || user?.displayName}!</Card.Title>
                  <Card.Text>
                    This is {user?.email || user?.displayName} dashboard.<br></br> You can add more components here to display.
                  </Card.Text>
                  <Button variant="primary" onClick={() => navigate("/profile")}>
                    Go to Profile
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;