import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsiteList from '../features/campsites/CampsiteList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    let selectedCampsite = selectRandomCampsite();

    const toggleCampsite = () => {
        console.log(selectedCampsite = selectRandomCampsite());
    }

    return (
        <Container>
            <Button onClick={() => toggleCampsite()}>Select Random Campsite</Button>
            <Row>
                <Col sm='5' md='7'>
                    <CampsiteList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;