import { ReactNode, useCallback, useMemo } from "react";
import { createRoot } from "react-dom/client";
import styles from "./BankBottomSheet.module.css";
import ImageLoader from "../image/ImageLoader";
import CheckIcon from "../icon/CheckIcon";

let id = 1;

let modalIds: number[] = [];

const Toast = ({ msg }: ToastProps) => {
  return (
    <div className={styles.toast_wrapper}>
      <CheckIcon />
      <span className={styles.message}>{msg}</span>
    </div>
  );
};

const showToast = (text: string) => {
  let root: Function;

  root = createReactRoot(<Toast msg={text} />);
  setTimeout(root, 3000);
};

type Props = {
  onClose: () => void;
  isMj?: boolean;
};

const accounts = {
  mj: [
    { bank: "kb", account: "국민 820 24 0224 421", name: "장용현" },
    { bank: "kb", account: "국민 639001 01 367723", name: "이금순" },
    { bank: "sh", account: "신한 110 425 996451", name: "장민정" },
  ],
  tk: [{ bank: "sh", account: "신한 110 411 590658", name: "김태경" }],
};

const BankList = ({ onClose, isMj }: Props) => {
  const targetAccounts = useMemo(() => {
    if (isMj) {
      return accounts.mj;
    }
    return accounts.tk;
  }, [isMj]);

  const handleCopy = useCallback((str: string) => {
    navigator.clipboard.writeText(str);
    showToast("계좌번호를 복사했어요!");
  }, []);

  return (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        <div className={styles.header}>{isMj ? "신부측" : "신랑측"}</div>
        <div className={styles.body}>
          {targetAccounts.map((it) => (
            <section className={styles.bank_wrapper}>
              <div className={styles.bank_content}>
                <ImageLoader
                  className={styles.bank_icon}
                  src={`/img/accont_img_${it.bank}.png`}
                />
                <section>
                  <section className={styles.bank_account}>
                    {it.account}
                  </section>
                  <section className={styles.name}>{it.name}</section>
                </section>
              </div>
              <div
                className={styles.bank_copy}
                onClick={() => handleCopy(it.account)}
              >
                <section className={styles.copy_button}>복사</section>
              </div>
            </section>
          ))}
        </div>
        <div className={styles.footer} onClick={onClose}>
          확인
        </div>
      </section>
    </div>
  );
};

const createReactRoot = (children: ReactNode) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const root = createRoot(div);
  root.render(children);
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
  const nowId = id++;
  modalIds.push(nowId);

  return () => {
    root.unmount();
    div.remove();
    modalIds = modalIds.filter((it) => it !== nowId);
    if (modalIds.length === 0) {
      document.body.style.overflow = "auto";
    }
  };
};

const showImage = (isMj: boolean) => {
  let root: Function;

  root = createReactRoot(<BankList isMj={isMj} onClose={() => root?.()} />);
};

interface ToastProps {
  msg: string;
}

const bankSheet = {
  open: showImage,
};

export default bankSheet;
