import Link from "next/link";

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowRight,
    faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MiniDouyin() {
    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <Link href="/mini-douyin">
                        <a className="button-big button-big fs-6 py-1 px-2">
                            <FontAwesomeIcon icon={faCircleArrowLeft} />
                            &nbsp;&nbsp;返回上页
                        </a>
                    </Link>
                    <br />
                    <br />
                    <h1>迷你抖音旧版本的不足分析</h1>
                    <div className="content">
                        <a className="a-dec" href="https://github.com/zenpk/mini-douyin">
                            <FontAwesomeIcon icon={faGithub} />
                            &nbsp;&nbsp;旧版本源代码及文档&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </a>
                        <div className="hr"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}