import gsap from "gsap";
import styles from "./Vitrin.module.css";
import { useGSAP } from "@gsap/react";
import { Product } from "../../api/products";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate(`/search/${props.product.title}`);
  }, []);
  return (
    <div onClick={onClick} className={styles.product}>
      <img src={props.product.image} alt={props.product.title} />
    </div>
  );
}
