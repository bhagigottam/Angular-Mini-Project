import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';

@Component({
  selector: 'app-featurespecific',
  templateUrl: './featurespecific.component.html',
  styleUrls: ['./featurespecific.component.scss']
})
export class FeaturespecificComponent {

  constructor(public route:ActivatedRoute) {
  
    route.paramMap.subscribe((pars:any)=>{
      console.log(pars.params.id);
      this.featureId = pars.params.id
    });
   
   }
   title = 'onlineShop';
   featureId="";
   pills:any=['extrashipping','under50rs','plastic bags','blocker shoes','vimtage'];
   
   buttonChanged(eve:any,val:string){
     console.log(eve);
     console.log(val);
     if(val=='HighToLow'){
       this.prods.sort((a, b) => b.price - a.price);
     }else if(val=='LowToHigh'){
       this.prods.sort((a, b) => a.price - b.price);
     }else{
       this.prods = [...this.originProds];
     }
     
     
   }
   prods = [
   {id:"kjdfh1",cart:false,title:"adfgasdfasdf",YOM:"2021",price:4000,tag:"Market",imageUrl:""},
   {id:"kjdfh2",cart:false,title:"Yellow fun attractive suitcase",YOM:"2020",price:8000,tag:"Shopping",imageUrl:"https://media.istockphoto.com/photos/travel-suitcase-picture-id1156089632?k=20&m=1156089632&s=612x612&w=0&h=5sM_arNqSxz0NVnhDyq7-er5LdGOpEfYvGF3BHQwxBg="},
   {id:"kjdfh3",cart:false,title:"Samsonite fancy suitcase",YOM:"2019",price:4000,tag:"Jewellery",imageUrl:"https://www.samsonite.in/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Samsonite/default/dw0ca71eec/images/72h-dlx-spinner-exp-wob-in/hi-res/145889_3672_hi-res_FRONT34_1.jpg?sw=500&sh=750"},
   {id:"kjdfh4",cart:false,title:"adfgasdfasdf",YOM:"2020",price:6000,tag:"Market",imageUrl:""},
   {id:"kjdfh5",cart:false,title:"adfgasdfasdf",YOM:"2018",price:2900,tag:"Jewellery",imageUrl:""},
   {id:"kjdfh6",cart:false,title:"adfgasdfasdf",YOM:"2018",price:3000,tag:"Shopping",imageUrl:""},
   {id:"kjdfh7",cart:false,title:"adfgasdfasdf",YOM:"2020",price:1000,tag:"Remote",imageUrl:""},
   {id:"kjdfh8",cart:false,title:"adfgasdfasdf",YOM:"2017",price:999,tag:"Display",imageUrl:""}]
   originProds = [...this.prods]
 
   doSearch(eve:any){
     console.log(eve);
 
     let temps = this.originProds.filter((prod)=>{
       return prod.title.toLowerCase().includes(eve.title.toLowerCase())
     })
     this.prods = [...temps]
   }
 
   filtersChanged(eve:any){
     console.log(eve);
     if(eve.years){
       this.prods = [...this.originProds]
       let tempProds = this.prods.filter((prod)=>{
         return eve.years.includes(prod.YOM); 
       })
       this.prods = [...tempProds]
     }
 
     if(eve.category){
       if(eve.category=="all"){
         this.prods = [...this.originProds]
       }else{
         this.prods = [...this.originProds]
         let tempProds = this.prods.filter((prod)=>{
           return prod.tag==eve.category; 
         })
         this.prods = [...tempProds];
       }
       
     }
     
   }

}
