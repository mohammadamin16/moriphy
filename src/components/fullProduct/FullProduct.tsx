import { Product } from "../../api/products";
import styles from "./FullProduct.module.css";

interface FullProductsProps {
  product: Product;
}

export function FullProduct(props: FullProductsProps) {
  return (
    <div className={styles.container}>
      <img src={props.product.image} />
      {"FullProduct"}
    </div>
  );
}
