import styles from './footer.module.css';

function Footer() {
    return (
      <footer>
        <div className={`container-fluid ${styles.cont_foot}  font-youkiss`}>
          <div className="row pt-5">
            <div className="col-12 col-md-4">
              <h5>SOCIAL</h5>
              <ul className={styles.social_list}>
                <li><a className="link-secondary"  href="#"><i className="fa-brands fa-facebook fa-2xl"></i></a></li>
                <li><a className="link-secondary"  href="#"><i className="fa-brands fa-twitter fa-2xl"></i></a></li>
                <li><a className="link-secondary"  href="#"><i className="fa-brands fa-instagram fa-2xl"></i></a></li>
                <li><a className="link-secondary"  href="#"><i className="fa-brands fa-linkedin fa-2xl"></i></a></li>
                <li><a className="link-secondary"  href="#"><i className="fa-solid fa-envelope fa-2xl"></i></a></li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-6">
                  <h5>ABOUT US</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">History</a></li>
                    <li><a className="link-secondary" href="#">Team</a></li>
                    <li><a className="link-secondary" href="#">Financial</a></li>
                  </ul>
                </div>
                <div className="col-6">
                  <h5>OUR WORK</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Approach</a></li>
                    <li><a className="link-secondary" href="#">Publication</a></li>
                    <li><a className="link-secondary" href="#">Blog</a></li>
                    <li><a className="link-secondary" href="#">Documents</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
            <div className="input-group mb-3">
              <input type="text" className={`form-control ${styles.inp_modi}`} placeholder="Subscribe to our newsletter..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div className={`input-group-append ${styles.appen_mod}`}>
                <span className={`input-group-text ${styles.group_mod}`} id="basic-addon2"><i className="fa-regular fa-paper-plane fa-lg"></i></span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  