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
                    <h2 id="comparison">新旧版本对比</h2>
                    <div className="content table-m">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>新版本</th>
                                    <th>旧版本</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-secondary">
                                    <td>数据库设计精炼</td>
                                    <td>数据库中包含较多冗余信息，且大量使用外键</td>
                                </tr>
                                <tr>
                                    <td>有 Redis 缓存设计</td>
                                    <td>仅使用 MySQL，无 Redis 缓存</td>
                                </tr>
                                <tr className="table-secondary">
                                    <td>使用 JWT 中间件鉴权</td>
                                    <td>使用无意义的 UUID 字段鉴权，且需要重复查询数据库</td>
                                </tr>
                                <tr>
                                    <td>丰富权限校验机制</td>
                                    <td>缺少必要的检验步骤和错误处理</td>
                                </tr>
                                <tr className="table-secondary">
                                    <td>代码分层设计</td>
                                    <td>仅使用 controller 模块，较为混乱</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 id="layout">文件结构对比</h2>
                    <div className="content">
                        改进后的项目文件目录按照代码分层布置，更加清晰，更容易扩展和维护</div>
                    <div className="row">
                        <div className="content col-6">
                            新版本
                            <div className="codeblock">
                                mini-douyin<br />
                                │<br />
                                ├───cache<br />
                                │       comment.go<br />
                                │       favorite.go<br />
                                │       rdb_init.go<br />
                                │       relation.go<br />
                                │       user.go<br />
                                │       util.go<br />
                                │       video.go<br />
                                │<br />
                                ├───cmd<br />
                                │     └───main<br />
                                │             main.go<br />
                                │<br />
                                ├───config<br />
                                │       const_value.go<br />
                                │<br />
                                ├───controller<br />
                                │       jwt.go<br />
                                │       router.go<br />
                                │<br />
                                ├───dal<br />
                                │       comment.go<br />
                                │       db_Init.go<br />
                                │       favorite.go<br />
                                │       relation.go<br />
                                │       user.go<br />
                                │       video.go<br />
                                │<br />
                                ├───public<br />
                                │     ├───covers<br />
                                │     └───videos<br />
                                │<br />
                                ├───service<br />
                                │       comment.go<br />
                                │       favorite.go<br />
                                │       feed.go<br />
                                │       jwt.go<br />
                                │       publish.go<br />
                                │       relation.go<br />
                                │       response.go<br />
                                │       user.go<br />
                                │<br />
                                └───util<br />
                                &nbsp;        util.go<br />
                            </div>
                        </div>
                        <div className="content col-6">
                            旧版本
                            <div className="codeblock">
                                mini-douyin-old<br />
                                │<br />
                                ├───controller<br />
                                │       comment.go<br />
                                │       common.go<br />
                                │       connect_db.go<br />
                                │       const_value.go<br />
                                │       demo_data.go<br />
                                │       favorite.go<br />
                                │       feed.go<br />
                                │       publish.go<br />
                                │       relation.go<br />
                                │       token.go<br />
                                │       user.go<br />
                                │<br />
                                └───public<br />
                                &nbsp;     ├───covers<br />
                                &nbsp;     └───videos<br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}