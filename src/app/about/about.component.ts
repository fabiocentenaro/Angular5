import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  id: number;

  items : any;


  constructor(private route: ActivatedRoute, private router: Router, private _data : DataService) {   
    
    this.route.params.subscribe(res => this.id = res.id);   
    
   }


   sendMeHome(){
      this.router.navigate(['']);
   }

  ngOnInit() {
    this._data.item.subscribe(res => this.items = res);
  }

}
