import { Injectable } from '@angular/core';

@Injectable()
export class Logservice1Service {
  
  log():void{
    console.log("Message one form Logservice1Service class.");
  }

  constructor() { }
}
