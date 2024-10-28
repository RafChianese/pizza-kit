// pizza.model.ts
export interface Pizza {
    id: string; // ID univoco della pizza
    name: string; // Nome della pizza
    description?: string; // Descrizione della pizza
    price: number; // Prezzo della pizza
    image?: string;
    quantity: number // URL dell'immagine della pizza
  }
  