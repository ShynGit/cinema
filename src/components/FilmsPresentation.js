import React from "react";
import { Card, Col, Icon, Row } from "react-materialize";
import { Link } from "react-router-dom";

export default function FilmsPresentation({ ListOfFilms }) {
    return (
        <div className="">
            <Row className="w-full">
                {ListOfFilms.map((film, index) => (
                    <Col m={3} s={12} key={index}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={
                                <img
                                    src={film.Image}
                                    className="object-cover h-96 w-full rounded-sm"
                                />
                            }
                            reveal={
                                <div className="mt-12">
                                    <h5 className="font-semibold mb-5">
                                        {film.Title}
                                    </h5>
                                    {film.Des}
                                </div>
                            }
                            revealIcon={<Icon>more_vert</Icon>}
                            title=" "
                            className="p-2 pb-0"
                        >
                            <h5 className="font-semibold h-16 mt-10">
                                {film.Title}
                            </h5>
                            <div>
                                <Link to={`/detail/${film.id}`}>
                                    <div className="bg-gray-800 py-1.5 text-white cursor-pointer rounded-lg">
                                        Detail
                                    </div>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                    // <Card
                    //     key={film.id}
                    //     actions={[
                    //         <Link to={`/detail/${film.id}`}>
                    //             <div className="bg-gray-800 py-1.5 text-white cursor-pointer">
                    //                 Detail
                    //             </div>
                    //         </Link>,
                    //     ]}
                    //     closeIcon={<Icon>close</Icon>}
                    //     header={
                    //         <CardTitle image={film.Image}>
                    //             {film.Title}
                    //         </CardTitle>
                    //     }
                    //     revealIcon={<Icon>more_vert</Icon>}
                    // >
                    //     <p className="py-1.5">{film.Year}</p>
                    //     <p className="py-1.5">{film.Nation}</p>
                    // </Card>
                ))}
            </Row>
        </div>
    );
}
