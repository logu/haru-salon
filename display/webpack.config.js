var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");
var nib = require('nib');
var path = require('path');


module.exports = {
    context: path.join(__dirname, 'public'),
    entry: path.join(__dirname, 'public', 'src', 'js', 'index.js'),
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'js/[name].js',
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.styl$/,
                loader: stylusLoader
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style", "css!resolve-url"
                )
            },
            {
                test: /\.(jpg|png)$/,
                loader: "file-loader?name=/images/[name].[ext]"
            },
            {
                test: /\.js$/, // si je rencontre un import de fichier js...
                exclude: [/node_modules/], //... qui n'est pas dans /node_modules/...
                loader: 'babel' //... alors j'utilise le loader babel
            },
            {
                test: /\.json$/,
                loader: 'json'
            }],
        noParse: [ /socket.io-client/ ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([
            { from: 'src/images', to: 'images' },
            { from: 'src/js', to: 'js' }
        ])
    ],
    stylus: {
        use: [nib()]
    }
};