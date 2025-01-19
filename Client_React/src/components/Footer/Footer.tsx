import { Link } from "react-router-dom";
import Container from "../Container/Container";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import logo from "./../../assets/images/Logo Delizioso.png";
import styles from "./footer.module.scss";

const Footer = (): React.ReactNode => {
  return (
    <footer
      className={`${styles.footer} bg-[#311F09] text-[#E3E2E0] text-sm sm:text-xl py-14`}
    >
      <Container>
        <div className="md:flex justify-between py-24">
          <section className="space-y-8 md:w-2/5">
            <img src={logo} alt="Logo" className="text-[#E3E2E0]" />
            <p>
              Viverra gravida morbi egestas facilisis tortor netus non duis
              tempor.
            </p>
            <div className="flex gap-5 pb-10">
              <div className={styles.footer__iconWrapper}>
                <FontAwesomeIcon
                  className={styles.footer__icon}
                  icon="faTwitter"
                />
              </div>
              <div className={styles.footer__iconWrapper}>
                <FontAwesomeIcon
                  className={styles.footer__icon}
                  icon="faInstagram"
                />
              </div>
              <div className={styles.footer__iconWrapper}>
                <FontAwesomeIcon
                  className={styles.footer__icon}
                  icon="faFacebookF"
                />
              </div>
            </div>
          </section>
          <section className="md:flex justify-between md:w-3/5 space-y-10 sm:space-y-0 md:gap-4">
            <div className={styles.footer__linksSection}>
              <h3 className={styles.footer__linksSectionTitle}>Page</h3>
              <Link to="/">Home</Link>
              <Link to="#">Menu</Link>
              <Link to="#">Order online</Link>
              <Link to="#">Catering</Link>
              <Link to="#">Reservation</Link>
            </div>
            <div className={styles.footer__linksSection}>
              <h3 className={styles.footer__linksSectionTitle}>Information</h3>
              <Link to="#">About us</Link>
              <Link to="#">Testimonial</Link>
              <Link to="#">Event</Link>
            </div>
            <div className={styles.footer__linksSection}>
              <h3 className={styles.footer__linksSectionTitle}>Get in touch</h3>
              <span>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</span>
              <span>delizioso@gmail.com</span>
              <span>+123 4567 8901</span>
            </div>
          </section>
        </div>
        <p className="md:text-center">Copyright c 2022 Delizioso</p>
      </Container>
    </footer>
  );
};

export default Footer;
