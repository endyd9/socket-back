
import {Controller, Get, Route} from '@tsoa/runtime';
import {AlertService} from "./alertService";
import express from "express";

@Route('alert')
export class AlertController extends Controller {
  service = new AlertService();

  @Get('/a')
  public async event() {
    return this.service.event()
  }

  @Get('/b')
  public async event2() {
    return this.service.event2()
  }
}
