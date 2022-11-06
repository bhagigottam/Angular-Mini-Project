import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
// import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs';
// import 'rxjs/add/operator/switchMap';
import { map,switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  config: any; 
  collection:any = [];
  constructor(private router:Router,
              private route: ActivatedRoute
) { 
    this.config = {
      currentPage: 1,
      itemsPerPage: 6
};


this.route.queryParamMap
.pipe(map((params:any) => params.get('page')))
.subscribe((page:any )=> this.config.currentPage = page);

for (let i = 1; i <= 100; i++) {
this.collection.push(`item ${i}`);
}

}


pageChange(newPage: number) {
this.router.navigate([''], { queryParams: { page: newPage } });
  }

  pageOfItems: any;
  perpage:any=10;
  title = 'onlineShop';
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
  {id:"kjdfh8",cart:false,title:"adfgasdfasdf",YOM:"2017",price:999,tag:"Display",imageUrl:""},
  {id:"kjdfh9",cart:false,title:"adfgasdfasdf",YOM:"2016",price:997,tag:"Television",imageUrl:""},
  {id:"kjdfh10",cart:false,title:"adfgasdfasdf",YOM:"2015",price:9999,tag:"Freezer",imageUrl:""},
  {id:"kjdfh11",cart:false,title:"adfgasdfasdf",YOM:"2018",price:1000,tag:"Cell",imageUrl:""},
  {id:"kjdfh12",cart:false,title:"adfgasdfasdf",YOM:"2022",price:3000,tag:"Phone",imageUrl:""},
  {id:"kjdfh13",cart:false,title:"adfgasdfasdf",YOM:"2012",price:3999,tag:"Display",imageUrl:""},
  {id:"kjdfh14",cart:false,title:"adfgasdfasdf",YOM:"2014",price:4999,tag:"Display",imageUrl:""},
  {id:"kjdfh15",cart:false,title:"adfgasdfasdf",YOM:"2010",price:5999,tag:"Display",imageUrl:""}]
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

 
//   onChangePage(pageOfItems: Array<any>) {
//     // update current page of items
//     this.pageOfItems = pageOfItems;
// }
}
