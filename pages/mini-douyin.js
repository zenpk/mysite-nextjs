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
                        本项目使用 Go 语言，根据所给的前端 API 文档及功能要求，完成一个迷你抖音后端的开发。包括用户注册登录、视频投稿、视频推送、点赞评论关注等功能
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
                            <li>代码合理分层，有效解耦，可扩展性强，减少重复代码</li>
                            <li>使用 GORM 预编译 SQL 代码，并进行注入测试，提升安全性</li>
                            <li>丰富的验证机制，每一步操作都有合理性的验证</li>
                            <li>后端密码 BCrypt 加密存储</li>
                        </ul>
                    </div>
                    <h2 id="difficulties">难点突破</h2>
                    <div className="content">
                        <ul>
                            <li>前端、Redis、MySQL 之间的数据流动比较复杂，通过对代码合理分层可有效避免混乱</li>
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
                        在最初的设计中，数据库中存储了较多不必要信息，同时设置了很多外键，这都会对查询效率产生较大影响。经过优化，删除了所有外键，并去除了冗余信息，例如 favorites 和 relations 表的自增主键，可由复合主键代替，提升读取和写入效率。MySQL 的实体关系如下：
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
                        向 Redis 的 Hash 中存储数据时，使用的包 go-redis 并未提供将 struct 映射到 Hash 的功能，因此使用了自己编写的工具函数&nbsp;
                        <a href="https://github.com/zenpk/RediStructHash" className="a-dec">zenpk/RediStructHash</a>
                        ，可以主动识别 struct 中的变量类型和名称，同时读取 tag 信息，并存储到 Redis 中去。大幅简化了代码编写的过程
                    </div>
                    <h2 id="models">各模块详细介绍</h2>
                    <h3 id="user">用户模块</h3>
                    <div className="content">
                        用户模块包含注册、登录、查看用户信息功能
                        <ul>
                            <li>注册和登录阶段为 token 生成阶段，因此不需经过 JWT 鉴权</li>
                            <li>用户注册或登录成功后，会生成 token 返回给用户，同时将用户的相关信息写入 Redis 缓存，用户信息在 Redis 中以 Hash 的形式存储</li>
                            <li>用户密码采用 BCrypt 加密（BCrypt 的优势在于可以人为调整哈希值计算复杂度，以应对彩虹表等攻击），注册时会检验用户名是否已存在</li>
                        </ul>
                    </div>
                    <h3 id="video">视频模块</h3>
                    <div className="content">
                        视频模块包含视频流获取、视频投稿、投稿列表获取功能
                        <ul>
                            <li>视频流获取：在程序执行的开始阶段就预先向 Redis 中写入一定数量的视频 id 及对应视频、视频作者、视频评论，方便之后直接获取。如果在之后的 feed 请求中发现用户处于登录状态，则需要进一步查询视频的点赞信息和对应用户的关注信息。视频流的获取无需经过 JWT 鉴权</li>
                            <li>视频投稿：先将视频存入 MySQL，再写入 Redis，由于发布视频的作者一定是已登录的用户，故不用再将用户写入 Redis。后端调用 FFmpeg 提取视频某帧作为封面，由于第 1 帧经常为黑屏，因此提取第 300 帧，但对于短视频来说可能不足 300 帧，因此更好的实践是先判断视频帧数，再选其中某帧提取，但考虑到不是本项目重点，故仅采用简便方法实现</li>
                            <li>投稿列表获取：根据用户 id 查询用户的投稿列表，先查询 Redis，命中则返回并更新过期时间，未命中再查询 MySQL，并写入 Redis</li>
                        </ul>
                    </div>
                    <h3 id="comment">评论模块</h3>
                    <div className="content">
                        评论模块包含发表评论、删除评论、查看评论列表功能
                        <ul>
                            <li>发表评论：将新评论存入 MySQL 同时写入 Redis。为维护数据一致性，对 Redis 中涉及到的视频采用延时双删的方法</li>
                            <li>删除评论：需要额外检验该用户是否有删除评论的权限（即评论对应的用户 id 与当前用户是否相符），删除时对 Redis 中涉及到的评论和视频采用延时双删</li>
                            <li>查看评论列表：根据视频 id 查询所有评论，由于 Redis 中评论的 key 值为评论 id 而非视频 id，因此需要遍历所有评论，选取与视频 id 相符的，若获取到的评论总数小于视频中记录的评论数，则认为缓存中缺少响应评论，需要从 MySQL 中查询。查看评论列表的同时需要查询对应的用户信息和关注信息</li>
                        </ul>
                    </div>
                    <h3 id="favorite">点赞模块</h3>
                    <div className="content">
                        点赞模块包含点赞、取消点赞、查看点赞列表功能
                        <ul>
                            <li>点赞/取消点赞：操作之前先判断是否合理，点赞时判断是否已经点过赞，取消点赞时判断是否存在点赞记录。之后再向 MySQL 中添加记录并写入 Redis。根据复合主键（用户 id，视频 id）的唯一性，点赞记录在 Redis 中全部使用 key 表示。一致性维护采用延时双删法</li>
                            <li>查看点赞列表：根据用户 id 查看点暂列表，并返回对应的视频</li>
                        </ul>
                    </div>
                    <h3 id="relation">关注模块</h3>
                    <div className="content">
                        关注模块包含关注、取消关注、查看关注/粉丝列表功能
                        <ul>
                            <li>关注/取消关注：操作之前先判断是否合理，关注时判断是否已经关注过，取消关注时判断是否存在关注记录。之后再向 MySQL 中添加记录并写入 Redis。在 Redis 中为每个用户维护一个 Set 组，key 值包含用户 id，成员为关注用户或粉丝用户 id，由于对用户 Set 的操作只可能是完整读入或完整删除，因此只要命中 Set 的 key 值，读取到的用户关注粉丝信息即是全部信息</li>
                            <li>查看关注/粉丝列表：先查询 Redis，未命中再查询 MySQL 并写入</li>
                        </ul>
                    </div>
                    <h2 id="server">服务器部署</h2>
                    <div className="content">
                        该项目已部署至腾讯云，服务器地址为：{"http://101.43.179.27:10240/"}，您可以使用“抖声”APP 体验完整功能。具体操作可参考
                        <a href="https://github.com/zenpk/mini-douyin-ex" className="a-dec">仓库文档</a>
                    </div>
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