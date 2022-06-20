import Link from "next/link"
import LayoutNoTOC from "../components/layout-noTOC"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

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
								<FontAwesomeIcon icon={faCircleArrowRight} />
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
