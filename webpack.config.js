import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";


export default {
    // mode development
    mode: "development",
    // the file that builds the dependency graph
    entry: "./src/index.js",
    // where to output the bundle
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    // at what it seems a way to add optional settings
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    // allow webpack to read and manipulate css
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
        ],
    },
};
