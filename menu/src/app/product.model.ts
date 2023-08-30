export interface Product {
    _id?: string;
    name: string;
    category: 'appetizer' | 'first course' | 'main course' | 'dessert' | 'other';
    price: number;
    image: string;
    isEditing?: boolean;
  }
  
