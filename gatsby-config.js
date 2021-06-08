require('dotenv').config({
	path: `.env.development`,
})

module.exports = {
	siteMetadata: {
		title: `Zailibrary`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/content/blog`,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Zailibrary`,
				short_name: `zlibrary`,
				start_url: `/`,
				background_color: `#ff9a8c`,
				theme_color: `#ff9a8c`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			},
		},
		{
			resolve: `gatsby-source-graphql`,
			options: {
				typeName: `HASURA`,
				fieldName: `comments`,
				url: `${process.env.HASURA_GRAPHQL_URL}`,
				headers: {
					Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
				},
				// refetchInterval: 60,
			},
		},
		`gatsby-plugin-gatsby-cloud`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 630,
						},
					},
				],
			},
		},
		`gatsby-plugin-postcss`,
	],
	flags: { PRESERVER_WEBPACK_CACHE: true },
}
