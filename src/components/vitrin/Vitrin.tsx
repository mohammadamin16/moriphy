import styles from "./Vitrin.module.css";

interface VitrinProductProps {
  id: number;
}

export function VitrinRow() {
  const vitrinProducts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <div className={styles.vitrin}>
      {vitrinProducts.map((product) => (
        <VitrinProduct 
        key={product.id}
        id={product.id} />
      ))}
    </div>
  );
}

export function VitrinProduct(props: VitrinProductProps) {
  return <div className={styles.product}>{props.id}</div>;
}
