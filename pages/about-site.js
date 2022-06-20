import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function AboutSite() {
    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <h1>基于 Next.js 搭建的本网站</h1>
                    <div className="content">
                        <a className="a-dec" href="https://github.com/zenpk/mysite-nextjs">
                            <FontAwesomeIcon icon={faGithub} />
                            &nbsp;&nbsp;源代码及文档&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </a>
                        <div className="hr"></div>
                    </div>
                    <h2 id="about">简介</h2>
                    <div className="content">
                        本网站通过使用 Next.js 简化了 HTML 的编写过程，使得此简单网页的制作更加方便
                    </div>
                    <h2 id="tech">相关技术</h2>
                    <table className="table table-m">
                        <thead></thead>
                        <tbody>
                            <tr className="table-secondary">
                                <th>
                                    框架
                                </th>
                                <td>
                                    Next.js, React, Bootstrap
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    HTML
                                </th>
                                <td>
                                    在 React 框架中使用 JSX 替代 HTML
                                </td>
                            </tr>
                            <tr className="table-secondary">
                                <th>
                                    CSS
                                </th>
                                <td>
                                    混合使用 Bootstrap 和 Vanilla CSS，使页面更加美观
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Javascript
                                </th>
                                <td>
                                    使用 React 框架功能自动生成目录
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="layout">文件结构</h2>
                    <div className="content codeblock">
                        mysite/<br />
                        ├─ conponents/<br />
                        │  ├─ layout.js<br />
                        │  ├─ sidebar.js<br />
                        │  ├─ toc.js<br />
                        ├─ public/<br />
                        │  ├─ image.jpg<br />
                        ├─ pages/<br />
                        │  ├─ 404.js<br />
                        │  ├─ index.js<br />
                        │  ├─ portfolio.js<br />
                        ├─ styles/<br />
                        │  ├─ bootstrap.css<br />
                        │  ├─ my.css<br />
                    </div>
                </div>
            </div>
        </Layout>
    );
}