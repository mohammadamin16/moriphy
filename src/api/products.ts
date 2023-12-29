export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function getProducts(): Promise<Product[]> {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
