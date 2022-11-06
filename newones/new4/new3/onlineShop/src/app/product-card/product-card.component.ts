import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  modalpop=false
  constructor(private cartServ:CartService) { }

  ngOnInit(): void {
  }
  addToCart(){
  
    this.data.cart = !this.data.cart;
    if(this.data.cart){
      this.cartServ.cartItems.push({...this.data})
    }else{
      this.cartServ.cartItems.forEach((item,ind) => {if(item.id == this.data.id){
        this.cartServ.cartItems.splice(ind,1);
      }})
    }

  }

  formodal(){
    this.modalpop=true
  }

  @Input() data = {title:"adfgasdfasdf",YOM:"2021",price:4000,tag:"entertainment",imageUrl:"",cart:false,id:"adfv"}
//  productData=[
//   {
//     image:"",
//     text:"",
//     price: ,

//   },
//   {

//   }

//  ]

// modal(){
//   this.modalpop=true
// }



}
