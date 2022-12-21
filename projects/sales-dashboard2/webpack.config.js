const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
 output: {
  publicPath: "http://localhost:3000/",
 },

 resolve: {
  extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
 },

 devServer: {
  port: 3000,
  historyApiFallback: true,
 },

 module: {
  rules: [
   {
    test: /\.m?js/,
    type: "javascript/auto",
    resolve: {
     fullySpecified: false,
    },
   },
   {
    test: /\.(css|s[ac]ss)$/i,
    use: ["style-loader", "css-loader", "postcss-loader"],
   },
   {
    test: /\.(ts|tsx|js|jsx)$/,
    exclude: /node_modules/,
    use: {
     loader: "babel-loader",
    },
   },
  ],
 },

 plugins: [
  new ModuleFederationPlugin({
   name: "sales_dashboard2",
   filename: "remoteEntry.js",
   remotes: {},
   exposes: {
    "./dashBoardWrapper": "./src/dashBoardWrapper.tsx",
   },
   shared: {
    ...deps,
    react: {
     singleton: true,
     requiredVersion: deps.react,
     eager: true,
    },
    "react-dom": {
     singleton: true,
     requiredVersion: deps["react-dom"],
     eager: true,
    },
   },
  }),
  new HtmlWebPackPlugin({
   template: "./src/index.html",
  }),
 ],
};
