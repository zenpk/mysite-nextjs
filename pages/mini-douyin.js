import Link from "next/link";

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowRight,
    faFileCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MiniDouyin() {
    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <h1>字节跳动青训营——迷你抖音后端功能实现</h1>
                    <div className="content">
                        <a className="a-dec" href="https://github.com/zenpk/mini-douyin-ex">
                            <FontAwesomeIcon icon={faGithub} />
                            &nbsp;&nbsp;源代码及文档&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </a>
                        <span className="fw-bold">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <Link href="/mini-douyin-old">
                            <a className="a-dec">
                                <FontAwesomeIcon icon={faFileCircleQuestion} />
                                &nbsp;&nbsp;与之前相比有哪些进步？上一个版本介绍&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faCircleArrowRight} />
                            </a>
                        </Link>
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
                                <tr>
                                    <th className="table-secondary">开发语言</th>
                                    <td>Go</td>
                                </tr>
                                <tr>
                                    <th className="table-secondary">HTTP 框架</th>
                                    <td>Gin</td>
                                </tr>
                                <tr>
                                    <th className="table-secondary">数据库</th>
                                    <td>GORM + MySQL</td>
                                </tr>
                                <tr>
                                    <th className="table-secondary">缓存</th>
                                    <td>Redis</td>
                                </tr>
                                <tr>
                                    <th className="table-secondary">中间件</th>
                                    <td>JWT</td>
                                </tr>
                                <tr>
                                    <th className="table-secondary">封面提取</th>
                                    <td>FFmpeg</td>
                                </tr>
                                <tr>
                                    <th className="table-secondary">测试工具</th>
                                    <td>pprof, sqlmap</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 id="logic">项目工作逻辑</h2>
                    <div className="content">
                        本项目使用 Gin 作为 HTTP 框架，采用 JWT 作为中间件鉴权，访问数据时先从 Redis 缓存中读取，再从 MySQL 数据库中读取，整体为一个类 MVC 框架
                    </div>
                    <img className="content image-center"
                        src="/mini-douyin/logic.png"
                        alt="logic"
                    />
                    <h2 id="merit">项目亮点</h2>
                    <div className="content">
                        <ul>
                            <li>经常访问的数据均使用了 Redis 缓存，提升效率</li>
                            <li>使用 JWT 鉴权，根据请求不同做出不同应对策略</li>
                            <li>代码合理分层，有效解耦，可扩展性强</li>
                            <li>使用 GORM 预编译 SQL 代码，并进行注入测试，提升安全性</li>
                            <li>丰富的验证机制，每一步操作都有合理性的验证</li>
                            <li>后端密码 BCrypt 加密存储</li>
                        </ul>
                    </div>
                    <h2 id="difficulties">难点突破</h2>
                    <div className="content">
                        <ul>
                            <li>前端、Redis、MySQL 之间的数据流动比较复杂，通过对代码合理分层解耦可有效避免混乱</li>
                            <li>Redis 中的数据写入、读取和一致性问题，采用延时双删的方法解决一致性问题</li>
                            <li>数据库设计需要合理，才能既减少冗余信息，又能维护各表间的关系且高效查询数据</li>
                            <li>
                                前端的各请求之间存在耦合情况，具体表现如下
                                <div className="table-m">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>请求</th>
                                                <th>理想情况</th>
                                                <th>实际情况</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-secondary">
                                                <td>视频流</td>
                                                <td>仅请求视频相关信息和是否点过赞</td>
                                                <td>请求视频相关信息、是否点过赞、作者相关信息、是否关注作者</td>
                                            </tr>
                                            <tr>
                                                <td>评论列表</td>
                                                <td>仅请求评论相关信息</td>
                                                <td>请求评论相关信息、作者相关信息、是否关注作者</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                需要对各模块代码定义更加清晰才能避免逻辑混乱和大量的重复代码
                            </li>
                        </ul>
                    </div>
                    <h2 id="database">数据库设计</h2>
                    <h3 id="mysql">MySQL</h3>
                    <div className="content">
                        在最初的设计中，数据库中存储了较多不必要信息，同时设置了很多外键，这都会对查询效率产生较大影响。
                        经过优化，删除了所有外键，并去除了冗余信息，例如 favorites 和 relations 表的自增主键，可由复合主键代替，提升读取和写入效率。
                        MySQL 的实体关系如下：
                        <div className="content image-center">
                            <img
                                src="/mini-douyin/mysql.png"
                                alt="mysqlERD"
                            />
                        </div>
                    </div>
                    <h3 id="redis">Redis</h3>
                    <div className="content">
                        对于 Redis 的数据结构选择，应当根据所存储数据的特征选取，才能充分利用其优势，提高查找效率。
                        Redis 的各数据结构如下：
                        <div className="cotent image-center">
                            <img
                                src="/mini-douyin/redis.png"
                                alt="redisDS"
                            />
                        </div>
                    </div>
                    <h2 id="models">各模块详细介绍</h2>
                    <h3 id="user">用户模块</h3>
                    <h2 id="plans">后续计划</h2>
                    <div className="content">
                        <ul>
                            <li>由于对 RPC 不熟悉，未使用微服务架构，计划在后续中学习 Kitex 并使用</li>
                            <li>学习使用消息队列</li>
                            <li>使用 Viper 优化 config 的读取</li>
                            <li>使用 zap 改进日志记录</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}