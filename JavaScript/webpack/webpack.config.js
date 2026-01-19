const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports =(env, args)=>{
    const isProd = args.mode == "production";
    return{
        mode: isProd ? "production":"development",
        entry:["./src/main.js"],
        output: {
            filename: isProd? "[contenthash]_[name].js" : "[name].js",
            clean: true
        },
        module:{
            rules:[
                {
                    test: /\.css$/,
                    use : [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                    ]
                }
            ]
        },
        devServer: {
            static:"./",
            //TODO: no need for inside .dist webpack and connect dots
            port: 9000,
        },
        plugins: [
            (isProd)?new MiniCssExtractPlugin({
                filename: "[contenthash]_[name].css"
            }):new MiniCssExtractPlugin({
                filename: "[name].css"
            }),
            new HtmlWebpackPlugin({
                template: "./index.html"
            })
        ],
        devtool: isProd ? "source-map" : "eval-source-map"
        //TODO: Avoid source map if it contains important business logic
    }
}