import { Injectable } from '@angular/core';

@Injectable()
export class Logservice2Service {

  log():void{
    console.log("Message one form Logservice2Service class.");
  }

  constructor() { }
}
