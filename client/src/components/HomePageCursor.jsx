import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class HomePageCursor extends Component {

    toPage = () => {
        console.log("4564")
    }

    render() {
        const SAlink = {
            display: "block",
            height: "fitContent"
        }

        return (
            // 自動播放 無限循環 設定4秒 可滑動 下方幻燈片開關 右上角圖片計數開關
            <Carousel autoPlay infiniteLoop interval="4000" swipeable showThumbs={false} showStatus={false}>
                <div>
                    <a style={SAlink} href="http://localhost:3000/games/blackjack/index.html" target="_blank">
                        <img src="images/cursor/Carousel_01.png" alt="imgErr" />
                    </a>
                </div>
                <div>
                    <a style={SAlink} href="http://localhost:3000/games/tiger/index.html" target="_blank">
                        <img  src="images/cursor/Carousel_02.png" alt="imgErr" />
                    </a>
                </div>
                <div>
                    <a style={SAlink} href="http://localhost:3000/games/fish/fishShooter.html" target="_blank">
                        <img src="images/cursor/Carousel_03.png" alt="imgErr" />
                    </a>
                </div>
                <div>
                    <a style={SAlink} href="http://localhost:3000/games/billiard/index.html" target="_blank">
                        <img src="images/cursor/Carousel_04.png" alt="imgErr" />
                    </a>
                </div>
                <div>
                    <a style={SAlink} href="http://localhost:3000/games/dragonshoot/index.html" target="_blank">
                        <img src="images/cursor/Carousel_05.png" alt="imgErr" />
                    </a>
                </div>
                {/* 這三個圖片重複了，所以我就把他們註解了 by阿川 */}
                {/* <div>
                    <a style={SAlink} href="https://www.w3schools.com/" target="_blank">
                        <img src="images/cursor/Carousel_01.png" alt="imgErr" />
                    </a>
                </div>
                <div>
                    <a style={SAlink} href="https://www.w3schools.com/" target="_blank">
                        <img src="images/cursor/Carousel_02.png" alt="imgErr" />
                    </a>
                </div>
                <div>
                    <a style={SAlink} href="https://www.w3schools.com/" target="_blank">
                        <img src="images/cursor/Carousel_03.png" alt="imgErr" />
                    </a>
                </div> */}
            </Carousel>
        );
    }
}

export default HomePageCursor;