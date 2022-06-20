import Link from "next/link"
import LayoutNoTOC from "../components/layout-noTOC"

export default function Home() {
	return (
		<LayoutNoTOC>
			<div className="banner">
				<div className="row">
					<div className="col" id="content">
						<br />
						<br />
						<div className="font-art banner-content">Hi, Welcome!</div>
						<br />
						<br />
						<Link href="/portfolio">
							<a className="button-big">我的简历&nbsp;&nbsp;
								<i className="fa-solid fa-circle-arrow-right"></i>
							</a>
						</Link>
					</div>
					<div className="col" id="photo">
						<img className="image-round image-80 image-center"
							src="/index/me.jpg"
							alt="me"
						/>
					</div>
				</div>
			</div>
		</LayoutNoTOC>
	);
}
