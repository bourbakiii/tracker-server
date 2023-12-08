import { $AuthMiddleware } from '../middleware/auth_require_middleware.js';
import express from 'express';

const $auth_router = new express.Router();

$auth_router.use($AuthMiddleware)
$auth_router.get("/user", (req,res)=>res.send("some user"))

export default $auth_router;
