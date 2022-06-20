import Layout from "../components/layout"

export default function MiniDouyin() {
    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <h1>字节跳动青训营——迷你抖音后端功能实现</h1>
                    <div className="content">
                        <a href="https://github.com/zenpk/mini-douyin">
                            <i className="fa-brands fa-github"></i>
                            &nbsp;&nbsp;源代码及文档&nbsp;&nbsp;
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </a>
                        <div className="hr"></div>
                    </div>
                    <h2 id="about">简介</h2>
                    <div className="content">
                        本项目使用 Go 语言，根据所给的前端 API 文档及功能要求，完成一个迷你抖音后端的开发。
                        包括用户注册登录、视频投稿、视频推送、点赞评论关注等功能
                    </div>
                    <h2 id="tech">相关技术</h2>
                    <table className="table table-m">
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
        </Layout>
    );
}