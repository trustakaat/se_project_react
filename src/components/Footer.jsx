import "../blocks/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__dev-name">Developed by James Clark</p>
      <p className="footer__date">{new Date().getFullYear()}</p>
    </footer>
  );
}
export default Footer;
