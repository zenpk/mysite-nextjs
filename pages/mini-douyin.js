import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MiniDouyin() {
    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <h1>字节跳动青训营——迷你抖音后端功能实现</h1>
                    <div className="content">
                        <a className="a-dec" href="https://github.com/zenpk/mini-douyin">
                            <FontAwesomeIcon icon={faGithub} />
                            &nbsp;&nbsp;源代码及文档&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </a>
                        <div className="hr"></div>
                    </div>
                    <h2 id="about">简介</h2>
                    <div className="content">
                        本项目使用 Go 语言，根据所给的前端 API 文档及功能要求，完成一个迷你抖音后端的开发。
                        包括用户注册登录、视频投稿、视频推送、点赞评论关注等功能
                    </div>
                    <h2 id="tech">相关技术</h2>
                    <div className="table-m">
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr className="table-secondary">
                                    <th>
                                        开发语言
                                    </th>
                                    <td>
                                        Go
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        HTTP 框架
                                    </th>
                                    <td>
                                        Gin
                                    </td>
                                </tr>
                                <tr className="table-secondary">
                                    <th>
                                        数据库
                                    </th>
                                    <td>
                                        GORM + MySQL
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}