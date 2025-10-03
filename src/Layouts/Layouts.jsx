import styles from "./Layouts.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>React.js | Basic Project</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Mamad78 With ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
