import gsap from "gsap";
import styles from "./Vitrin.module.css";
import { useGSAP } from "@gsap/react";
import { Product } from "../../api/products";
import { useRef, useState } from "react";

interface VitrinProductProps {
  product: Product;
}

interface VitrinRowProps {
  direction: "left" | "right";
  products: Product[];
}

const ANIM_TIME = 20;
export function VitrinRow(props: VitrinRowProps) {
  const vitrinRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(vitrinRef.current, {
      transform: `translateX(${props.direction === "left" ? "-100%" : "100%"})`,
      duration: ANIM_TIME,
      repeat: -1,
      ease: "none",
    });
  }, [props.direction]);

  return (
    <div className={styles.conatiner}>
      <div
        ref={vitrinRef}
        style={{
          position: "relative",
          left: props.direction === "right" ? "-100%" : "",
        }}
        className={styles.vitrin}
      >
        {props.products.map((p) => (
          <VitrinProduct key={p.id} product={p} />
        ))}
      </div>
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
