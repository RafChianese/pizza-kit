import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PizzaService } from '../../services/pizza.service';
import { CartService } from '../../services/cart.service';
import { Pizza } from './models/pizza.model';

@Component({
  selector: 'app-pizza-kit-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './pizza-kit-list.component.html',
  styleUrls: ['./pizza-kit-list.component.scss']
})
export class PizzaKitListComponent implements OnInit {
  kits: any[] = [];

  constructor(private pizzaService: PizzaService, private cartService: CartService) {}

  ngOnInit(): void {
    this.pizzaService.getPizzaKits().subscribe((data: any[]) => {
      this.kits = data;
    });
  }

  addToCart(product: any): void {
    const item = {
      id: product._id,  // Assicurati che l'ID sia presente
      name: product.name,
      price: product.price,
      quantity: 1  // Quantità di default
    };
    
    this.cartService.addToCart(item);
    console.log('sto aggiungendo: ', item)
  }
}
