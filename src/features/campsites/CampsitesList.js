import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";


const CampsitesList = ({ setCampsiteId }) => {
    const campsites = selectAllCampsites();

    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => { // does a "for" loop on campsite array
                return (
                    // pass each array item `into CampsiteCard as a prop & the value of its "id" key to the "key" prop
                    // onClick, changes the state of the ID to whatever the current item's ID is
                    // 
                    <Col onClick={() => setCampsiteId(campsite.id)} md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default CampsitesList;