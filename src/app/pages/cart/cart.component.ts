import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { Pizza } from '../pizza-kit-list/models/pizza.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Pizza[] = [];
  subtotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Iscriviti agli elementi del carrello e aggiorna il componente quando il carrello cambia
    this.cartService.getItems().subscribe(items => {
      console.log('Items in cart after subscription:', items);  // Debugging
      this.cartItems = items;
      this.subtotal = this.cartService.getTotal(); // Calcola il subtotale
    });
  }

  // Aggiorna la quantità di un prodotto nel carrello
  updateQuantity(productId: string, quantity: number): void {
    if (quantity > 0) {
      this.cartService.updateQuantity(productId, quantity);
    }
  }

  // Rimuove un prodotto dal carrello
  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
  }
}
