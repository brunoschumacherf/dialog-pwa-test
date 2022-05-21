import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import schema from './schema';
import fs from 'fs';
import path from 'path';
const morgan =  require('morgan');
const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});


app.use(compression());

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
morgan.token('body', (req:any, res:any) => { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]', { stream: accessLogStream }));


server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);
httpServer.listen(
  { port: 4000 },
  (): void => console.log(`\nServer on http://localhost:4000/graphql`));