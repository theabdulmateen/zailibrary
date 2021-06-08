// require('dotenv').config({
// 	path: `.env.development`,
// })

// module.exports = {
// 	schema: 'http://localhost:8000/___graphql',
// 	documents: [
// 		'./src/**/*.tsx',
// 		'./src/**/*.ts',
// 		'./node_modules/gatsby-transformer-*/!(node_modules)/**/*.js',
// 		'./gatsby-node.ts',
// 		'./src/graphql/**/*.graphql',
// 		'./cache/**/*.{js,ts,graphql}',
// 	],
// 	overwrite: true,
// 	generates: {
// 		'./generated/graphql.tsx': {
// 			schema: {
// 				[process.env.HASURA_GRAPHQL_URL]: {
// 					headers: {},
// 				},
// 			},
// 			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
// 			config: {
// 				maybeValue: 'T',
// 				skipTypename: false,
// 				withHooks: true,
// 				withHOC: false,
// 				withComponent: false,
// 			},
// 		},
// 	},
// }
