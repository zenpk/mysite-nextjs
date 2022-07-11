import Link from "next/link";
import Layout from "../components/layout"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faC,
    faCircleArrowRight,
    faCode,
    faTrophy,
    faMedal,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGolang,
    faPython,
    faJava,
    faJs,
    faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons"

export default function Portfolio() {
    return (
        <Layout>
            <div className="row" id="first-row">
                <div className="col-9" id="info">
                    <h1>个人简历</h1>
                    <div className="content">
                        <span className="fs-3 fw-bold">曾远昊&nbsp;&nbsp;</span>
                        <span className="fs-5 fw-normal">男&nbsp;&nbsp;22岁</span>
                    </div>
                    <div className="content">
                        <span className="fw-bold">
                            本科院校：北京航空航天大学 — 电子信息工程学院 — 通信工程
                        </span>
                        <br/>
                        {" (2018.9 - 2022.6)"}
                        <br/>
                        <span className="fw-bold">
                            硕士院校：北京大学 — 软件与微电子学院 — 软件工程
                        </span>
                        <br/>
                        {" (2022.9 - 2025.6)"}
                    </div>
                </div>
                <div className="col-3" id="photo">
                    <br/>
                    <br/>
                    <img className="content"
                         src="/portfolio/id.jpg"
                         alt="me"
                    />
                </div>
                <div className="hr"></div>
            </div>
            <div className="row" id="content">
                <div className="col" id="content-main">
                    <h2 id="skills">计算机相关项目及技能</h2>
                    <div className="table-m">
                        <table className="table table-striped-my">
                            <thead>
                            <tr className="fs-5">
                                <th>项目经历</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faGolang}/>
                                    &nbsp;&nbsp;字节跳动青训营——迷你抖音后端功能实现&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link href="/mini-douyin">
                                        <a className="a-dec">
                                            了解详情&nbsp;<FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </a>
                                    </Link>
                                    &nbsp;&nbsp;⭐
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faJs}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;基于 Next.js 搭建的本网站&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link href="/about-site">
                                        <a className="a-dec">
                                            了解详情&nbsp;<FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faJava}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;基于 Spring Boot 的留言板系统&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link href="/message-board">
                                        <a className="a-dec">
                                            了解详情&nbsp;<FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faPython}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;基于 PyTorch 的神经网络手写体数字识别&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link href="/mnist-pytorch">
                                        <a className="a-dec">
                                            了解详情&nbsp;<FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faPython}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;基于 TelegramBotAPI 的多功能聊天机器人
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faC}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;宽带电磁响应仿真中的插值方法研究（毕设题目，论文在投）
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faPython}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;使用 Numpy 手动实现神经网络的构建
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faPython}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;基于 OpenCV 的图像处理
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faCode}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;数据结构与算法练习量 {">"} 200 题&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a className="a-dec" href="https://leetcode.cn/u/zenpk/">
                                        我的 LeetCode&nbsp;<FontAwesomeIcon icon={faFreeCodeCamp}/>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-m">
                        <table className="table table-striped-my">
                            <thead>
                            <tr className="fs-5">
                                <th>技术</th>
                                <th>掌握程度</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Go</td>
                                <td>▮▮▮▮▯&nbsp;&nbsp;&nbsp;&nbsp;比较熟练、有项目经验</td>
                            </tr>
                            <tr>
                                <td>C/C++</td>
                                <td>▮▮▮▯▯&nbsp;&nbsp;&nbsp;&nbsp;比较熟练、掌握经典数据结构与算法</td>
                            </tr>
                            <tr>
                                <td>MATLAB</td>
                                <td>▮▮▮▯▯&nbsp;&nbsp;&nbsp;&nbsp;比较熟练、本科毕设相关</td>
                            </tr>
                            <tr>
                                <td>Git</td>
                                <td>▮▮▯▯▯&nbsp;&nbsp;&nbsp;&nbsp;熟悉</td>
                            </tr>
                            <tr>
                                <td>HTML, CSS</td>
                                <td>▮▮▯▯▯&nbsp;&nbsp;&nbsp;&nbsp;熟悉</td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td>▮▮▯▯▯&nbsp;&nbsp;&nbsp;&nbsp;熟悉</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>▮▯▯▯▯&nbsp;&nbsp;&nbsp;&nbsp;了解</td>
                            </tr>
                            <tr>
                                <td>SQL</td>
                                <td>▮▯▯▯▯&nbsp;&nbsp;&nbsp;&nbsp;了解</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 id="postgraduate">考研成绩</h2>
                    <div className="table-m">
                        <table className="table table-striped-my">
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td className="fw-bold">初试成绩</td>
                                <td>总分：407</td>
                                <td>政治：71</td>
                                <td>英语：89</td>
                                <td>数学：120</td>
                                <td>计算机：127</td>
                            </tr>
                            <tr>
                                <td className="fw-bold">复试成绩</td>
                                <td>87</td>
                                <td className="fw-bold">综合成绩</td>
                                <td>83.08</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="fw-bold">总排名</td>
                                <td>21/574</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 id="competition">参赛及获奖经历</h2>
                    <span className="fs-5">英语成绩: CET-6 632分</span>
                    <br/>
                    <br/>
                    <div className="table-m">
                        <table className="table table-striped-my">
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faTrophy}/>
                                    &nbsp;&nbsp;2020 年 10 月 第十一届蓝桥杯软件类省赛 C/C++ 程序设计大学 A 组 二等奖
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faTrophy}/>
                                    &nbsp;&nbsp;2021 年&nbsp;&nbsp;4&nbsp;&nbsp;月 第十二届蓝桥杯软件类省赛 C/C++ 程序设计大学 A 组 二等奖
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faMedal}/>
                                    &nbsp;&nbsp;2020 年 12 月 北京航空航天大学 学科竞赛奖学金 一等奖
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faMedal}/>
                                    &nbsp;&nbsp;2021 年 12 月 北京航空航天大学 学科竞赛奖学金 一等奖
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faMedal}/>
                                    &nbsp;&nbsp;2020 年 12 月 北京航空航天大学 学习优秀奖学金 二等奖
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 id="introduction">个人优势</h2>
                    <div className="content">
                        本人学习能力很强，利用不到一年的时间完成了跨专业考研，并取得了很好的成绩。英语能力强，
                        善于阅读国外的各种文献资料，善于使用 StackOverflow 等网站、阅读各框架项目的官方文档。
                        对一个全新的项目，均能在几天内从一无所知到上手开发。
                    </div>
                </div>
            </div>
        </Layout>
    );
}