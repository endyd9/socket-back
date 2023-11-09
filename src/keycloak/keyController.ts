import {Controller, Get, Post, Route} from "@tsoa/runtime";
import {KeyService} from "./keyService";

@Route("/key")
export class KeyController extends Controller{
    service = new KeyService()
    @Post("/")
    public async join() {
        return this.service.join()
    }

    @Get("/")
    public async login() {

    }

}