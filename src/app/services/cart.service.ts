import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../pages/pizza-kit-list/models/pizza.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Pizza[] = [];
  private cartItemsSubject = new BehaviorSubject<Pizza[]>(this.items);

  constructor() {
    this.loadCart(); // Carica il carrello dal localStorage al momento dell'inizializzazione
  }

  // Aggiunge una pizza al carrello
  addToCart(pizza: Pizza) {
    const existingPizza = this.items.find(item => item.id === pizza.id);
    if (existingPizza) {
      // Se la pizza esiste già nel carrello, incrementa la quantità
      existingPizza.quantity += pizza.quantity || 1; // Se la quantità non è definita, incrementa di 1
    } else {
      // Se è una nuova pizza, impostala con quantità 1 (se non specificata)
      pizza.quantity = pizza.quantity || 1;
      this.items.push(pizza);
    }
    this.saveCart(); // Salva il carrello nel localStorage
    this.cartItemsSubject.next(this.items); // Notifica gli abbonati
  }


  // Rimuove una pizza dal carrello in base all'ID
  removeFromCart(productId: string) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart(); // Salva il carrello aggiornato
    this.cartItemsSubject.next(this.items);
  }

  // Restituisce gli oggetti del carrello come Observable
  getItems() {
    return this.cartItemsSubject.asObservable();
  }

  // Calcola il totale del carrello
  getTotal() {
    return this.items.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  }

  // Salva il carrello nel localStorage
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  // Carica il carrello dal localStorage
  private loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.cartItemsSubject.next(this.items);
    }
  }

  // Pulisce il carrello
  clearCart() {
    this.items = [];
    this.saveCart(); // Aggiorna il localStorage
    this.cartItemsSubject.next(this.items);
  }

  // Aggiorna la quantità di una pizza nel carrello
  updateQuantity(productId: string, quantity: number) {
    const item = this.items.find(item => item.id === productId);
    if (item && quantity > 0) {
      // Potresti voler gestire la logica per la quantità in base al tuo caso d'uso
      item.quantity = quantity; // Se il modello Pizza include quantity, altrimenti gestisci diversamente
      this.cartItemsSubject.next(this.items); // Notifica gli abbonati del cambiamento
    }
  }
}
