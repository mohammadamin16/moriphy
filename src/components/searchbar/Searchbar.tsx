import { useNavigate, useParams } from "react-router-dom";
import styles from "./Searchbar.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import searchIcon from "../../assets/search.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_EASE = "power4.out";
const ANIMATION_DURATION = 0.3;
const ANIMATION_DELAY = 4;
const ANIMATION_HEIGHT = 35;

export function SearchBar() {
  const { query } = useParams<{ query: string }>();
  const navigate = useNavigate();
  const timeline = gsap.timeline();

  const [searchInput, setSearchInput] = useState(query || "");
  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
    },
    []
  );
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(searchInput);
      navigate(`/search/${searchInput}`);
    },
    [searchInput] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const nextSuggetionRef = useRef<HTMLDivElement>(null);
  const currentSuggestionRef = useRef<HTMLDivElement>(null);
  const [currentSuggestion, setCurrentSuggestion] = useState(
    "Smart TVs with voice control"
  );
  const [nextSuggestion, setNextSuggestion] = useState(
    "Affordable 4K monitors"
  );

  const animate = useCallback(() => {
    // if (!nextSuggetionRef.current || !currentSuggestionRef.current) return;
    timeline.set(nextSuggetionRef.current, { delay: 4, y: 100 });
    timeline.to(currentSuggestionRef.current, {
      y: -ANIMATION_HEIGHT,
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
    });
    timeline.to(nextSuggetionRef.current, {
      y: 0,
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
    });
    timeline.set(currentSuggestionRef.current, {
      delay: ANIMATION_DELAY,
      y: ANIMATION_HEIGHT,
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
    });
    timeline.set(currentSuggestionRef.current, {
      y: ANIMATION_HEIGHT,
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
    });
    timeline.to(nextSuggetionRef.current, {
      delay: ANIMATION_DELAY,
      y: -ANIMATION_HEIGHT,
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
    });
    timeline.to(currentSuggestionRef.current, {
      y: 0,
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
    });
  }, []);

  useGSAP(() => {
    timeline.set(nextSuggetionRef.current, { y: ANIMATION_HEIGHT });
    animate();
    const interval = setInterval(() => {
      animate();
    }, ANIMATION_DELAY * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    function hideSuggestion() {
      setIsTyping(true);
    }
    function showSuggestion() {
      setIsTyping(false);
    }
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", hideSuggestion);
      inputRef.current.addEventListener("blur", showSuggestion);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("focus", hideSuggestion);
        inputRef.current.removeEventListener("blur", showSuggestion);
      }
    };
  }, []);

  useEffect(() => {
    console.log("isTyping", isTyping);
  }, [isTyping]);
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <img className={styles.search_icon} src={searchIcon} alt="search" />
      <>
        <div
          style={{ visibility: isTyping || searchInput ? "hidden" : "visible" }}
          ref={currentSuggestionRef}
          className={styles.suggestion}
        >
          {currentSuggestion}
        </div>
        <div
          style={{ visibility: isTyping || searchInput ? "hidden" : "visible" }}
          ref={nextSuggetionRef}
          className={styles.suggestion}
        >
          {nextSuggestion}
        </div>
      </>
      <input
        style={{ zIndex: 1 }}
        ref={inputRef}
        type="search"
        value={searchInput}
        onChange={onInputChange}
      />
    </form>
  );
}
