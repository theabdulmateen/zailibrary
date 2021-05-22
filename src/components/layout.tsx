import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'

interface LayoutProps {
	children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Welcome to ZBlog`} />
			<div>
				<main>{children}</main>
				<footer
					style={{
						marginTop: `2rem`,
					}}>
					© {new Date().getFullYear()}, Socials: - - -
				</footer>
			</div>
		</>
	)
}

export default Layout
