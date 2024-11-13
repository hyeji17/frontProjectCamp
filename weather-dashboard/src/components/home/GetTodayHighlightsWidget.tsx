import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    GetSunTime,
    GetCardData,
} from "@/components";

function GetTodayHighlightsWidget() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle className="text-xl">Today's Highlights</CardTitle>
                <CardDescription>
                    오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고
                    있습니다.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                    <Card className=" w-full bg-neutral-100">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                해양 및 조수 데이터
                                <span className="text-neutral-400 font-normal ml-1">
                                    Marine and Sailing
                                </span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="w-full flex items-center justify-between">
                            <img
                                src="src/assets/icons/Waves.png"
                                alt=""
                                className="h-14"
                            />
                            <div className="w-fit grid grid-cols-4 gap-3">
                                <div className="flex flex-col items-center">
                                    {/* 몇회 만조/간조 표시 영역 */}
                                    <p className="text-sm text-muted-foreground">
                                        1회 - 만조
                                    </p>
                                    {/* 시간 표시 영역 */}
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                        05:48
                                        <span className="ml-[1px]">am</span>
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    {/* 몇회 만조/간조 표시 영역 */}
                                    <p className="text-sm text-muted-foreground">
                                        1회 - 만조
                                    </p>
                                    {/* 시간 표시 영역 */}
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                        05:48
                                        <span className="ml-[1px]">am</span>
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    {/* 몇회 만조/간조 표시 영역 */}
                                    <p className="text-sm text-muted-foreground">
                                        1회 - 만조
                                    </p>
                                    {/* 시간 표시 영역 */}
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                        05:48
                                        <span className="ml-[1px]">am</span>
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    {/* 몇회 만조/간조 표시 영역 */}
                                    <p className="text-sm text-muted-foreground">
                                        1회 - 만조
                                    </p>
                                    {/* 시간 표시 영역 */}
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                        05:48
                                        <span className="ml-[1px]">am</span>
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className=" w-full bg-neutral-100">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                일출/일몰
                                <span className="text-neutral-400 font-normal ml-1">
                                    Sunrise and Sunset
                                </span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2">
                            <GetSunTime
                                imgUrl={"src/assets/icons/1000d.svg"}
                                label={"Sunrise"}
                                time={"07:00 AM"}
                            />
                            <GetSunTime
                                imgUrl={"src/assets/icons/1000n.svg"}
                                label={"Sunset"}
                                time={"05:34 PM"}
                            />
                        </CardContent>
                    </Card>
                </div>
                <div className="w-full grid grid-cols-4 gap-5">
                    <GetCardData
                        label={"습도"}
                        description={"Humidity"}
                        imgUrl={"src/assets/icons/Humidity.svg"}
                        numberData={80}
                        unit={"%"}
                    />
                    <GetCardData
                        label={"기압"}
                        description={"Pressure"}
                        imgUrl={"src/assets/icons/Wind.svg"}
                        numberData={1024}
                        unit={"hPa"}
                    />
                    <GetCardData
                        label={"가시거리"}
                        description={"Visibility"}
                        imgUrl={"src/assets/icons/Fog.svg"}
                        numberData={10}
                        unit={"km"}
                    />
                    <GetCardData
                        label={"체감온도"}
                        description={"Feels Like"}
                        imgUrl={"src/assets/icons/Hot.svg"}
                        numberData={19}
                        unit={"&#8451;"}
                    />
                </div>
            </CardContent>
        </Card>
    );
}

export { GetTodayHighlightsWidget };
