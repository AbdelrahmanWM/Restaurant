const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output:{
        filename:'main.[contentHash].js',
        path: path.resolve(__dirname,'dist'),
        clean:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        })
    ],
    module:{
        rules:[
        {
            test:/\.(jpg|png)$/i,
            use: 'file-loader'
        },
        {
            test:/\.css$/i,
            use: ['style-loader','css-loader']
        }
        ]
    }
}