import Link from "next/link";
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function UnderConstruct() {
    return (
        <Layout>
            <div className="banner banner-content">
                <div className="row">
                    <div className="col">
                        <h1>{"This Page is Currently Under Construction..."}</h1>
                        <Link href="/">
                            <a className="button-big">Back to Homepage&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faCircleArrowRight} />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}