import LayoutNoTOC from "../components/layout-noTOC"

export default function Hobbies() {
    return (
        <LayoutNoTOC>
            <div className="row" id="title">
                <div className="col">
                    <h1>我的爱好</h1>
                </div>
            </div>
            <div className="row" id="hobbies-1">
                <div className="col-7" id="content">
                    <div className="font-art fs-1 fw-bold">
                        Guitar
                        <br />
                        <span className="fs-5">我喜欢弹吉他，我的演奏视频在网上收获了很多播放</span>
                    </div>
                </div>
                <div className="col-5" id="photo">
                    <img className="content image-round image-80"
                        src="/hobbies/guitar.jpg"
                        alt="guitar"
                    />
                </div>
            </div>
            <br />
            <br />
            <div className="row" id="hobbies-2">
                <div className="col-7" id="content">
                    <div className="font-art fs-1 fw-bold">
                        Singing
                        <br />
                        <span className="fs-5">我喜欢唱歌，有自己的原创歌曲</span>
                    </div>
                </div>
                <div className="col-5" id="photo">
                    <img className="content image-round image-80"
                        src="/hobbies/singing.jpg"
                        alt="singing"
                    />
                </div>
            </div>
        </LayoutNoTOC>
    );
}
