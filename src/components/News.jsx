import { Tab, Tabs } from "react-materialize";
import { ListOfNews } from "../shared/ListOfNews";

export const News = () => {
    return (
        <div className="pt-14">
            <Tabs
                className="tab-demo z-depth-1"
                options={{
                    swipeable: true,
                }}
                scope="tabs-41"
            >
                {ListOfNews.map((news, index) => (
                    <Tab
                        className="text-left mb-20"
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false,
                        }}
                        title={
                            <div className="font-bold w-96">{news.Title}</div>
                        }
                        key={index}
                    >
                        <div className="mx-10">
                            <h5 className="font-semibold">{news.Title}</h5>
                            <p className="mb-10 text-gray-400/70">
                                {news.Date}
                            </p>
                            <p className="pr-44">{news.Des}</p>
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};
