import "./Home.scss";

function HomePage() {
    return (
        <div className="page">
            <div className="page__container">
                <header>
                    <img src="/src/assets/talking_potato.png" alt="사진" />
                    <h3>Weather.io</h3>
                    <input placeholder="검색할 지역 이름을 입력하세요." />
                </header>
                <div className="top_container">
                    <div className="today_container">
                        <h4>Today</h4>
                        <p>오늘 현재 날씨를 조회하고 있습니다.</p>
                        <div className="today_weather_container">
                            <div className="today_weather_data">
                                <img
                                    src="/src/assets/talking_potato.png"
                                    alt="사진"
                                />
                                <h1>19℃</h1>
                            </div>
                            <hr />
                            <h6>2024-11-03</h6>
                            <h6>Seoul, South Korea</h6>
                        </div>
                    </div>
                    <div className="hourly_container">
                        <h4>Hourly</h4>
                        <p>오늘의 시간대별 날짜를 조회하고 있습니다.</p>
                        <div className="hourly_weather_container">날씨</div>
                    </div>
                    <div className="map_container">
                        <img src="/src/assets/talking_potato.png" alt="사진" />
                    </div>
                </div>
                <div className="bottom_container">
                    <div className="container todays_highlight_container">
                        <h4>Today's Hightlight</h4>
                        <p>
                            오늘 날씨 중 주의깊게 살펴조아야 할 이벤트를
                            조회하고 있습니다.
                        </p>
                        <div className="bottom_container_top">
                            <div className="box marine_saliing_container">
                                <span>
                                    <h4>해양 및 조수 데이터</h4>
                                    <p>Marine and Sailing</p>
                                </span>
                                <div className="marine_saliing_data">
                                    파도 / 시간
                                </div>
                            </div>
                            <div className="box sunrise_sunset_container">
                                <span>
                                    <h4>일출/일몰</h4>
                                    <p>Sunrise & Sunset</p>
                                </span>
                                <div className="sunrise_data">sunrise</div>
                                <div className="sunset_data">sunset</div>
                            </div>
                        </div>
                        <div className="bottom_container_bottom">
                            <div className="box humidity_container">
                                <span>
                                    <h4>습도</h4>
                                    <p>Humidity</p>
                                </span>
                                <div className="humidity_data">습도 data</div>
                            </div>
                            <div className="box pressure_container">
                                <span>
                                    <h4>기압</h4>
                                    <p>pressure</p>
                                </span>
                                <div className="pressure_data">
                                    pressure_data
                                </div>
                            </div>
                            <div className="box visibility_container">
                                <span>
                                    <h4>가시거리</h4>
                                    <p>visibility</p>
                                </span>
                                <div className="visibility_data">
                                    visibility_data
                                </div>
                            </div>
                            <div className="box feels_like_container">
                                <span>
                                    <h4>체감온도</h4>
                                    <p>Feels Like</p>
                                </span>
                                <div className="feels_like_data">
                                    feels_like_data
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container days_container">
                        <h4>7 Days</h4>
                        <p>이번주 날씨를 조회하고 있습니다.</p>
                        <div className="days_data">
                            <div className="day_data">일</div>
                            <div className="day_data">월</div>
                            <div className="day_data">화</div>
                            <div className="day_data">수</div>
                            <div className="day_data">목</div>
                            <div className="day_data">금</div>
                            <div className="day_data">토</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
