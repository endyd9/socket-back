import {Controller, Get, Route, Middlewares, Query, Path} from "@tsoa/runtime";
import {TokenService} from "./tokenService";
import {tokenMiddleware} from "./tokenMiddleware";
import express from "express";


@Route("/")
export class TokenController extends Controller {

    @Get("/{id}")
    public async Hi(
        @Path("id")id: string
    ) {
        return await new TokenService().Hi(id)
    }

    // @Get("/token")
    // @Middlewares(tokenMiddleware)
    // public  async ok(res:express.Response) {
    //     return await new TokenService().ok()
    // }
}