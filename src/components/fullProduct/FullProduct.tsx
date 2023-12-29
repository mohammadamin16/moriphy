import { Product } from "../../api/products";
import styles from "./FullProduct.module.css";
import likeIcon from "../../assets/like.svg";
import explorIcon from "../../assets/explor.svg";

interface FullProductsProps {
  product: Product;
}

export function FullProduct(props: FullProductsProps) {
  return (
    <div className={styles.container}>
      <img src={props.product.image} />
      <span>{props.product.title}</span>
      <span>{props.product.description}</span>
      <span className={styles.price}>{`$${props.product.price}`}</span>
      <div className={styles.float}>
        <div>
          <img src={explorIcon} />
        </div>
        <div>
          <img src={likeIcon} />
        </div>
      </div>
    </div>
  );
}
