import { Button, Icon, Select, Textarea, TextInput } from "react-materialize";

export const Contact = () => {
    const handleSubmit = (e) => e.preventDefault();

    return (
        <div className="flex bg-gray-700 justify-center py-14 h-auto">
            <div className="h-fit p-14 pt-4 w-10/12 bg-white">
                <h1 className="uppercase p-4 pb-2 font-bold text-3xl">
                    Liên hệ chúng tôi
                </h1>
                <p className="text-center pb-10 font-sans">
                    Bạn có thể liên hệ chúng tôi thông qua
                </p>
                <div className="flex gap-8 justify-center flex-col md:flex-row md:px-3">
                    <div className="md:w-3/12 border md:h-80 h-fit rounded-md md:px-4 w-full">
                        <div className="flex justify-center md:mt-12 mb-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-semibold md:pb-14">
                            Phone
                        </h1>
                        <p className="font-sans">(+84) 0365444461</p>
                    </div>
                    <div className="md:w-3/12 border md:h-80 h-fit rounded-md md:px-4 w-full">
                        <div className="flex justify-center md:mt-12 mb-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-semibold md:pb-14">
                            Email
                        </h1>
                        <p className="font-sans">synhse160311@gmail.com</p>
                    </div>
                    <div className="md:w-3/12 border md:h-80 h-fit rounded-md md:px-4 w-full">
                        <div className="flex justify-center md:mt-12 mb-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-semibold md:pb-14">
                            Address
                        </h1>
                        <p className="font-sans">
                            Tòa S302, Vinhome Grand Park, Thành phố Thủ Đức
                        </p>
                    </div>
                </div>
                <p className="my-10">Hoặc</p>
                <form
                    onSubmit={handleSubmit}
                    className="md:mx-80 px-5 border border-cyan-700/50"
                >
                    <TextInput id="TextInput-38" label="Họ và tên" />
                    <TextInput id="TextInput-39" label="Số điện thoại" />
                    <TextInput email id="TextInput-41" label="Email" validate />
                    <Select
                        id="Select-46"
                        multiple={false}
                        onChange={function noRefCheck() {}}
                        value=""
                    >
                        <option disabled value="">
                            Chọn thể loại phim bạn yêu thích
                        </option>
                        <option value="1">Hành động</option>
                        <option value="2">Lãng mạn</option>
                        <option value="3">Kịch tính</option>
                    </Select>
                    <Textarea
                        icon={<Icon>mode_edit</Icon>}
                        id="Textarea-28"
                        label="Nội dung"
                    />
                    <div className="w-full flex mb-5 justify-end pr-6">
                        <Button>Gửi</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
