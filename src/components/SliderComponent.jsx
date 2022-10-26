import { Caption, Slide, Slider } from "react-materialize";

export const SliderComponent = ({ ListOfFilms }) => {
    const show = ["center", "left", "right"];

    return (
        <Slider
            fullscreen={false}
            options={{
                duration: 500,
                height: 400,
                indicators: true,
                interval: 6000,
            }}
        >
            {ListOfFilms.map((film, index) => (
                <Slide image={<img alt="" src={film.Image} />} key={index}>
                    <Caption placement={show[Math.floor(Math.random() * 3)]}>
                        <h3 className="font-bold w-auto py-4 px-7 bg-gray-900/50 rounded-md">
                            {film.Title}
                            <p className="truncate text-base font-normal mt-5">
                                {film.Des}
                            </p>
                        </h3>
                    </Caption>
                </Slide>
            ))}
        </Slider>
    );
};
