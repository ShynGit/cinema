import { Col, Preloader, Row } from "react-materialize";

export const Loading = () => {
    return (
        <div className="bg-gray-900 h-screen flex items-center justify-center">
            <Row>
                <Col s={4}>
                    <Preloader
                        active
                        color="blue"
                        flashing={false}
                        size="big"
                    />
                </Col>
            </Row>
        </div>
    );
};
