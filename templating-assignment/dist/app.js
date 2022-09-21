"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var express = __importStar(require("express"));
var app = express.default();
var PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(path_1.default.dirname(__dirname), 'src', 'views'));
app.use(body_parser_1.default.urlencoded());
var userData = [];
app.get('/', function (req, res) {
    res.render('form', {
        path: '/',
        pageTitle: 'Form',
    });
});
app.get('/users', function (req, res) {
    res.render('users', {
        path: '/users',
        pageTitle: 'Users',
        users: userData,
    });
});
app.post('/users', function (req, res) {
    userData.push(req.body.name);
    res.redirect('/');
});
app.use(express.static(path_1.default.join(path_1.default.dirname(__dirname), 'public')));
app.get('*', function (req, res) {
    res.render('404', {
        path: req.url,
        pageTitle: 'Page not found.',
    });
});
app.listen(PORT, function () {
    console.log("App listening at localhost:".concat(PORT));
});
