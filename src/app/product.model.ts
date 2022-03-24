// export es para poder usar la interface en otros archivos
// la interface sirve para marcar las reglas del objeto
export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string; // Con ? decimos que es opcional
}
