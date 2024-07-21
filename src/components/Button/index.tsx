import styles from "./index.module.css";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  label: string;
  variant: "primary" | "danger";
};

const Button = ({ label, variant, ...rest }: Props) => (
  <button
    {...rest}
    className={`${styles.module} ${variant === "danger" ? styles.danger : ""}`}
  >
    {label}
  </button>
);

export default Button;
