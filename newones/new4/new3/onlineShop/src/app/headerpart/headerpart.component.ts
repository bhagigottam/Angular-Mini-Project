import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerpart',
  templateUrl: './headerpart.component.html',
  styleUrls: ['./headerpart.component.scss']
})
export class HeaderpartComponent implements OnInit {

  constructor(private route:Router) { }

  @Output() searchpressed = new EventEmitter();

  ngOnInit(): void {
  }
  clickedRoute(path:string){
    this.route.navigateByUrl('/feature/'+path);
  }
  showsigninModal=false;
  loginshow=true;
  signshow=false;
  goToCart(){
    this.route.navigateByUrl('/cart');
  }
  goToHome(){
    this.route.navigateByUrl('/');
  }
  registerClick(){
    this.showsigninModal=true;
    this.signshow=true
    this.loginshow=false
  }

  searchText=""

  searchIt(){
    this.searchpressed.emit({title:this.searchText});
    this.searchText="";
    
  }
  tabchange(x:any){
if(x=='login'){
  this.loginshow=true
  this.signshow=false
}
if(x=='sign'){
  this.signshow=true
  this.loginshow=false
}

  }


  toClicksignin(){
    this.showsigninModal=true;
    this.loginshow=true;
    this.signshow=false;
  }

}
