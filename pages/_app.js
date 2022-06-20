import Head from "next/head"
import Script from "next/script"

import "../styles/sidebar.css"
import "../styles/my.css"
import "../styles/mysidebar.css"

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/*Loading Bootstrap*/}
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
			</Head>
			{/*Loading Bootstrap*/}
			<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" />
			{/*Loading Font Awesome*/}
			<Script src="https://kit.fontawesome.com/287de95113.js" crossOrigin="anonymous" />
			<Component {...pageProps} />
		</>
	)
}
