import styles from "./index.module.css";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  label: string;
};

const Button = ({ label, ...rest }: Props) => (
  <button {...rest} className={styles.module}>
    {label}
  </button>
);

export default Button;
