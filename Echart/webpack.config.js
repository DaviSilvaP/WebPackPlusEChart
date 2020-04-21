const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js'
	},

	// Ajuda no debbug dos erros, apontando onde ocorreu o erro no arquivo certo.
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},

	plugins: [
		// Limpa a pasta /dist
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			hash: true,
			title: 'ECharts',
			template: './src/index.html'
		}),
	],

	output: {
		// Atribui o nome da chave das "entry" ao nome do arquivo de saída.
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};