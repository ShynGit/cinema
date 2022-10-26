import { useEffect, useState } from "react";
import { Icon } from "react-materialize";
import { useParams } from "react-router-dom";
import { ListOfFilms } from "../shared/ListOfFilms";
import { Loading } from "./Loading";
import { ModelCase } from "./ModelCase";

export const FilmDetail = () => {
    const [loading, setLoading] = useState(true);
    const filmId = useParams();
    const film = ListOfFilms.find((item) => item.id == filmId.id);
    const [trailerOpen, setTrailerOpen] = useState(false);

    useEffect(() => {
        const delayInterval = setInterval(() => {
            setLoading(false);
        }, 1000);
        return () => {
            clearInterval(delayInterval);
        };
    }, []);

    return (
        <>
            {trailerOpen && (
                <ModelCase setTrailerOpen={setTrailerOpen} film={film} />
            )}
            {loading === true ? (
                <Loading />
            ) : (
                <div className="bg-gray-900 h-screen">
                    {trailerOpen && (
                        <div
                            onClick={() => setTrailerOpen(false)}
                            className="absolute w-full h-screen bg-gray-900/80"
                        ></div>
                    )}
                    <div className="h-56 pt-10">
                        <img
                            src={`../${film.Image}`}
                            className="m-auto w-10/12 object-cover object-center h-72 shadow-md shadow-gray-200 border"
                        />
                    </div>
                    <div className="flex md:px-44 md:pt-10 px-8 pt-32">
                        <div className="md:inline hidden md:w-4/12">
                            <img
                                src={`../${film.Image}`}
                                className="w-full object-cover md:h-80 h-56 border border-red-300 shadow-lg shadow-gray-400 rounded-md"
                            />
                        </div>
                        <div className="text-left">
                            <h3
                                className="md:pt-12 md:pl-12 font-bold text-xl md:text-4xl text-red-600"
                                style={{
                                    textShadow:
                                        "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
                                }}
                            >
                                {film.Title}
                            </h3>
                            <div className="flex p-2 md:ml-10 md:mt-6 text-white text-xs md:text-base">
                                <p className="w-14 font-semibold text-red-500">
                                    Mô tả:
                                </p>
                                <p className="w-11/12 text-left ">{film.Des}</p>
                            </div>
                            <div className="flex mt-12 ml-[6.4rem]">
                                <button className="hidden md:flex text-white bg-green-600 p-3 px-4 rounded-lg  items-center">
                                    <Icon left>save</Icon>Lưu lại
                                </button>
                                <button
                                    className="hidden md:flex text-white bg-cyan-600  p-3 px-4 rounded-lg  ml-4 items-center"
                                    onClick={() => setTrailerOpen(true)}
                                >
                                    <Icon left>ondemand_video</Icon>Xem trailer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
