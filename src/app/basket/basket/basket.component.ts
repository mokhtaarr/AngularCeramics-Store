import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { BasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  constructor(public basketService:BasketService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   incrementQuantity(item:BasketItem)
  {
    this.basketService.addItemToBasket(item);
  }

  removeItem(id:number,quantity:number)
  {
    this.basketService.removeItemFromBasket(id,quantity);
  }
}
