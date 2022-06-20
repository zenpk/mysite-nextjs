import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MessageBoard() {
    return (
        <Layout>
            <div className="row" id="main">
                <div className="col" id="content">
                    <h1>基于 Spring Boot 的留言板系统</h1>
                    <div className="content">
                        <a href="https://github.com/zenpk/spring-boot-message-board-system">
                            <FontAwesomeIcon icon={faGithub} />
                            &nbsp;&nbsp;源代码及文档&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </a>
                        <div className="hr"></div>
                    </div>
                    <h2 id="about">简介</h2>
                    <div className="content">
                        本项目使用 Java，基于 Spring Boot 框架，设计了一个可以进行注册、登录验证、发布/查看/编辑/删除信息的留言板系统，
                        上述操作均涉及与后端数据库的交互
                    </div>
                    <h2 id="tech">相关技术</h2>
                    <table className="table table-m">
                        <thead></thead>
                        <tbody>
                            <tr className="table-secondary">
                                <th>前端部分</th>
                                <td>Thymeleaf, Bootstrap</td>
                            </tr>
                            <tr>
                                <th>后端部分</th>
                                <td>Spring Boot, Spring Web MVC, Spring Data JPA (Hibernate), Spring Security</td>
                            </tr>
                            <tr className="table-secondary">
                                <th>依赖管理</th>
                                <td>Maven</td>
                            </tr>
                            <tr>
                                <th>数据库</th>
                                <td>MySQL</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="functions">创新功能</h2>
                    <div className="content">
                        <ul>
                            <li>
                                通过后端控制器 (Controller)，自动为 Message 对象加入发布时间，并在 Message 更新时自动更新修改时间
                            </li>
                            <li>
                                通过后端控制器 (Controller)，读取当前登录的用户，并将用户名作为作者名写入 Message 对象中
                            </li>
                            <li>
                                提供游客登录功能，具体实现方式为自动登录数据库中预设的 guest 账户
                            </li>
                            <li>
                                根据当前登录的用户提供权限控制功能，具体权限如下表：
                                <table className="table table-m">
                                    <thead>
                                        <tr>
                                            <th>用户组</th>
                                            <th>管理员</th>
                                            <th>注册用户</th>
                                            <th>游客</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-secondary">
                                            <td>发布/读取信息</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <td>编辑/删除游客发布的信息</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr className="table-secondary">
                                            <td>编辑/删除注册用户（自己）发布的信息</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>编辑/删除注册用户（他人）发布的信息</td>
                                            <td>✓</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr className="table-secondary">
                                            <td>编辑/删除管理员发布的信息</td>
                                            <td>✓</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                    </div>
                    <h2 id="logic">项目逻辑</h2>
                    <div className="content">
                        本项目的工作逻辑如下图所示
                    </div>
                    <img className="content image-center image-50"
                        src="/message-board/system-logic.png"
                        alt="systemLogic"
                    />
                </div>
            </div>
        </Layout>
    );
}