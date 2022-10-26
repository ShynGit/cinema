export const ModelCase = ({ film }) => {
    return (
        <div className="w-auto h-auto top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-1/2 z-10 fixed p-2">
            <iframe
                width="900"
                height="500"
                src={film.Trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
};
