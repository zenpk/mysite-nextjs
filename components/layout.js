import Head from "next/head"
import Toc from "./toc"
import Sidebar from "./sidebar"

export default function Layout({ children }) {
    return (<>
        <Head>
            <title>{"zenpk's blog"}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        </Head>

        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-10" id="sidebarAndMain">
                    <div className="row">
                        <div className="col-3" id="sidebar">
                            <Sidebar />
                        </div>
                        <div className="col-9" id="main">
                            <div className="page-header" id="header-container">
                                <div className="row justify-content-between" id="page-header">
                                    <div className="col-3" id="blog-title">
                                        <span className="fw-bold">{"zenpk's "}</span>blog
                                    </div>
                                    <div className="col-3 text-end" id="links">
                                        <span className="font-code">My GitHub ={">"} </span>
                                        <a className="a-nodec fs-3" href="https://github.com/zenpk" tabIndex="0">
                                            <i className="fa-brands fa-github"></i>
                                        </a>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li className="page-header-line"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="page-body" id="body-container">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2" id="TOC">
                    <Toc/>
                </div>
            </div>
        </div>
    </>
    );
}