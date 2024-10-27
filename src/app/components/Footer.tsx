import styles from "./Footer.module.css"; // Use lowercase for the import

const Footer = () => {
    return (
        <footer className={styles.heading}> {/* Corrected closing brace */}
            <p>&copy; 2024 Your Company</p>
        </footer>
    );
};

export default Footer;