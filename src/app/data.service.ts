import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private items = new BehaviorSubject<any>(["Item 1", "Item 2"]);

  item = this.items.asObservable();

  changeItem(item)
  {
    this.items.next(item);
  }

 


  constructor() { }

}
