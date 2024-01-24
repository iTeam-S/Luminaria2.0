'use client'
import { useRef, useState } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
    let menubar = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleBar = () => {
    setIsMenuOpen(true);
    menubar.current.classList.toggle(styles.hash_nav);
  }
  const maskBar = () => {
    setIsMenuOpen(false);
    menubar.current.classList.toggle(styles.hash_nav);
  }
    return (
        
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <a className={`navbar-brand ${styles.titre}`} href="#">
                    <img src="./logoluminaria.png" alt="Logo" width="60" height="60" className="d-inline-block align-text-top"/>
                    Luminaria
                </a>
                <div className={styles.menu_bars}>{!isMenuOpen ? (<i className="fa-solid fa-bars" onClick={() => handleBar()}></i> ) : (<i className="fa-solid fa-xmark" onClick = {() => maskBar()}></i>)}</div>  
                </div>
                <div data-aos="fade-left" className={`${styles.hash_nav} navbar-collapse`} ref={menubar} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-youkiss">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ABOUT US
                        </a>
                        <ul className={`dropdown-menu ${styles.modif_drop}`}>
                        <li><a className={styles.modif_drop_item} href="#">HISTORY</a></li>
                        <li><a className={styles.modif_drop_item} href="#">TEAM</a></li>
                        <li><a className={styles.modif_drop_item} href="#">FINANCIAL</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        OUR WORK
                        </a>
                        <ul className={`dropdown-menu ${styles.modif_drop}`}>
                        <li><a className={styles.modif_drop_item} href="#">APPROCH</a></li>
                        <li><a className={styles.modif_drop_item} href="#">PUBLICATION</a></li>
                        <li><a className={styles.modif_drop_item} href="#">BLOG</a></li>
                        <li><a className={styles.modif_drop_item} href="#">DOCUMENTS</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">CONTACT</a>
                    </li>
                    </ul>
                    <form className="d-flex" style={{alignItems: 'center', flexDirection: 'column'}} role="search">        
                    <button className={`btn btn-outline-dark mx-5 px-1 ${styles.shadow_merch}`} type="submit">MERCH <i className="fa-solid fa-bag-shopping"></i></button>
                    </form>
                </div>
            </nav>
        </header>
    )
}