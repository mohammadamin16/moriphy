import styles from "./Chat.module.css";

import closeIcon from "../../assets/close.svg";
import magicIcon from "../../assets/magic.svg";
import { useCallback, useEffect, useState } from "react";
import { query } from "../../api/chat";
interface Message {
  message: string;
  isMine: boolean;
}
export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const onSubimt = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!message) return;
      setMessages((prev) => [...prev, { message, isMine: true }]);
      setMessage("");
      query(message).then((response) => {
        setMessages((prev) => [...prev, { message: response, isMine: false }]);
      });
    },
    [message]
  );
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  return (
    <>
      {isOpen ? (
        <div className={styles.container}>
          <div className={styles.header}>
            <span>Shop AI</span>
            <img
              src={closeIcon}
              alt="close"
              onClick={toggle}
              className={styles.close}
            />
          </div>
          <div className={styles.messages_container}>
            {messages.map((message) =>
              message.isMine ? (
                <MyMessage key={message.message} message={message.message} />
              ) : (
                <BotMessage key={message.message} message={message.message} />
              )
            )}
          </div>
          <form onSubmit={onSubimt} className={styles.body}>
            <input
              onChange={onChange}
              value={message}
              type="text"
              placeholder="Reply"
            />
          </form>
        </div>
      ) : (
        <div onClick={toggle} className={styles.button}>
          <img src={magicIcon} alt="AI" />
          Shop AI
        </div>
      )}
    </>
  );
}

function MyMessage(props: { message: string }) {
  return <div className={styles.my_message}>{props.message}</div>;
}
function BotMessage(props: { message: string }) {
  return <div className={styles.bot_message}>{props.message}</div>;
}
