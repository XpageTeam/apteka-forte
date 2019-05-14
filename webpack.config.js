const path = require("path");

module.exports = {
	entry: {
		vendors: "./src/js/common.js",
		common: "./src/ts/common.ts",
	},
	output: {
		path: path.resolve(__dirname, "./docs/"),
		filename: "js/[name].js",
	},
	devServer: {
		contentBase: "./docs",
		overlay: false,
	    // open: true,
	    // hot: true,
	    // inline: true,
	    // watchContentBase: true,
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				// exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "css-loader",
						options: {
							minimize: true,
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.sss$/,
				use: [
					{
						loader: "style-loader",
						options: { sourceMap: true }
					},
			        {
			          loader: 'css-loader',
			          options: { sourceMap: true }
			        },
			        {
			          loader: 'postcss-loader',
			          options: { 
			          	sourceMap: true, 
			          	config: { 
			          		path: './postcss.config.js' 
			          	} 
			          }
			        }
			    ]
			},
            
		]
	},
	resolve: {
		extensions: [
			".ts",
			".tsx",
			".js"
		]
	}
}