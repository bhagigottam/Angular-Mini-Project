import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartServ:CartService) { }

  cartItems:any = []
  ngOnInit(): void {
    this.cartItems=this.cartServ.cartItems;
    
  }

}
