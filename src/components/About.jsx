import {
    Collapsible,
    CollapsibleItem,
    Container,
    Icon,
} from "react-materialize";

export const About = () => {
    return (
        <div className="bg-gray-700 h-auto py-14 pb-44 min-h-[90vh]">
            <Container className="p-14 pt-4  bg-white">
                <h1 className="uppercase p-4 pb-0 font-bold text-3xl">
                    Giới thiệu
                </h1>
                <p className="pb-10">Giới thiệu về chúng tôi</p>
                <Collapsible accordion popout>
                    <CollapsibleItem
                        expanded={false}
                        header="GIỚI THIỆU CHUNG"
                        icon={<Icon>info</Icon>}
                        node="div"
                        className="text-left"
                    >
                        Trang xem phim trực tuyến số 1 Việt Nam. Chất lượng và
                        trải nghiệm xem phim của khách hàng luôn là ưu tiên hàng
                        đầu của chúng tôi. Xin chân thành cảm ơn quý khách đã
                        dành nhiều sự quan tâm và ủng hộ.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="ĐỘI NGŨ PHÁT TRIỂN"
                        icon={<Icon>people</Icon>}
                        node="div"
                        className="text-left"
                    >
                        Founder: Nguyễn Hữu Sỹ
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="ĐIỀU KHOẢN CHUNG"
                        icon={<Icon>assignment</Icon>}
                        node="div"
                        className="text-left"
                    >
                        Việc bạn sử dụng website này đồng nghĩa với việc bạn
                        đồng ý với những thỏa thuận dưới đây.Nếu bạn không đồng
                        ý, xin vui lòng không sử dụng website.
                    </CollapsibleItem>
                </Collapsible>
            </Container>
        </div>
    );
};
