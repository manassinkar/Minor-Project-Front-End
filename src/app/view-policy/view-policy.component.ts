import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {
  public policy: any;

  public errMsg: string='';
  constructor(public router: Router) { }

  ngOnInit() {
    //this.viewPolicy(this.policy)
    this.policy = JSON.parse(localStorage.getItem('policy'));
    console.log(this.policy);
  }
  
  
  
}
