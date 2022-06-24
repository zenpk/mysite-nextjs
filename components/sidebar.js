import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";


export default function Sidebar() {
    return (<>
        {/* <div className="flex-shrink-0 sidebar-all" style={{ width: "22em" }}> */}
        <div className="sticky-top sidebar-all" id="whole-sidebar">
            <div className="sidebar-title" id="sidebar-title">Menu</div>
            <div id="main-items">
                <ul className="list-unstyled">
                    <li className="sidebar-line-short">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    <li>
                        <Link href="/">
                            <a className="link-dark sidebar-item">
                                Homepage 主页
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            <a className="link-dark sidebar-item">
                                Portfolio 简历
                            </a>
                        </Link>
                    </li>
                    <button
                        className="btn btn-toggle align-items-center collapsed sidebar-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#dashboard-collapse"
                        aria-expanded="false"
                        id="submenu"
                    >
                        Projects 项目
                    </button>
                    <div className="collapse" id="dashboard-collapse">
                        <ul className="list-unstyled">
                            <li>
                                <Link href="/mini-douyin">
                                    <a className="sidebar-subitem">
                                        - ⭐ 字节跳动青训营——迷你抖音后端功能实现
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-site">
                                    <a className="sidebar-subitem">
                                        - 基于 Next.js 搭建的本网站
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/message-board">
                                    <a className="sidebar-subitem">
                                        - 基于 Spring Boot 的留言板系统
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/mnist-pytorch">
                                    <a className="sidebar-subitem">
                                        - 基于 PyTorch 的神经网络手写体数字识别
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <li>
                        <Link href="/hobbies">
                            <a className="link-dark sidebar-item">
                                Hobbies 爱好
                            </a>
                        </Link>
                    </li>
                    <br />
                    <li className="sidebar-line"></li>
                </ul>
            </div>
            <div className="sidebar-title" id="sidebar-title2">Contact</div>
            <div id="contact">
                <li className="sidebar-line-short">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <ul className="list-unstyled">
                    <li>
                        <span className="sidebar-contact">
                            <FontAwesomeIcon icon={faPhone} className="my-color" />
                            &nbsp;&nbsp;&nbsp;156-0126-1799
                        </span>
                    </li>
                    <li>
                        <span className="sidebar-contact">
                            <FontAwesomeIcon icon={faEnvelope} className="my-color" />
                            &nbsp;&nbsp;&nbsp;zenpk@foxmail.com
                        </span>
                    </li>
                    <li>
                        <span className="sidebar-contact">
                            <FontAwesomeIcon icon={faWeixin} className="my-color" />
                            &nbsp;&nbsp;&nbsp;zzenpk
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </>
    );
}