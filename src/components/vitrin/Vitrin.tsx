import { Product } from "../../api/products";
import styles from "./Vitrin.module.css";

interface VitrinProductProps {
  product: Product;
}

interface VitrinRowProps {
  products: Product[];
}
export function VitrinRow(props: VitrinRowProps) {
  return (
    <div className={styles.vitrin}>
      {props.products.map((p) => (
        <VitrinProduct key={p.id} product={p} />
      ))}
    </div>
  );
}

export function VitrinProduct(props: VitrinProductProps) {
  return (
    <div className={styles.product}>
      <img src={props.product.image} alt={props.product.title} />
    </div>
  );
}
