import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import './TopBar.css';
function TopBar() {
  return (
    <Container>           
      <Row>
        <Col>
            <div className='TopBar_Title'>우신크레인</div>
        </Col>
        <Col xs={2}>

        </Col>
        <Col>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">
                        회사소개
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/business_information">
                        업무안내
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/gallery">
                        갤러리
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/online_consulting">
                    온라인 상담
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
      </Row>
    </Container>
  );
}



export default TopBar;