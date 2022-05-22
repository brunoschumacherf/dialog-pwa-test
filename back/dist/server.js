"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
var http_1 = require("http");
var compression_1 = __importDefault(require("compression"));
var schema_1 = __importDefault(require("./schema"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var morgan = require('morgan');
var app = (0, express_1.default)();
var server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    validationRules: [(0, graphql_depth_limit_1.default)(7)],
});
app.use((0, compression_1.default)());
var accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'access.log'), { flags: 'a' });
morgan.token('body', (req, res) => { return JSON.stringify(req.body); });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]', { stream: accessLogStream }));
server.applyMiddleware({ app: app, path: '/graphql' });
var httpServer = (0, http_1.createServer)(app);
httpServer.listen({ port: 4000 }, () => { return console.log("\nServer on http://localhost:4000/graphql"); });
