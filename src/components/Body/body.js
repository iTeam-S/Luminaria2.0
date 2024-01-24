import styles from './body.module.css';
import "./aze.css"

export default function Body() {
    return (
        <div className="body" style={{marginBottom: "5%"}}>
            <div data-aos="fade-left" className={styles.diviseurHead}>
                <div className={`${styles.div_hr_top} ${styles.svg_head}`}>
                    <div className='background-morph2'></div>
                    <svg style={{marginRight: "87%"}} xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                        <line x1="0" y1="0" x2="0" y2="150" stroke="black" strokeWidth="2" />  
                        <path d="M0,100 A100,100 0 0,1 100,0" fill="none" stroke="black" strokeWidth="1" /> 
                    </svg>
                </div>
            </div>
            <div data-aos="zoom-in" className={styles.entete}>
                <div className={`d-flex justify-content-start font-aventi hero ${styles.titre_page}`}>
                    <div className='background-morph'></div>
                    <h1>Ensemble , <br/> Eclairons le monde</h1>
                </div>
                <img className={styles.faire_don}  src="/faire_don.png" alt="Faire Don" />
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button data-aos="zoom-in" className={`btn btn-outline-dark mx-3 ${styles.shadow_merch}`} type="submit">More  <i className="fas fa-light fa-arrow-down fa-lg mx-1"></i></button>
            </div>
            <div data-aos="flip-up" style={{fontFamily: "Roboto !important"}} className="card_tete">
                <div className={`${styles.div_hr_top} ${styles.bod} mt-5`}></div>
                <div className="row">     
                    <div data-aos="fade-up" className="col-md-4 start_col">
                        <div className="content_descr">
                            <h2><span><i className="fa-solid fa-spinner fa-spin"></i></span> EN COURS</h2>
                            <p className={styles.paragraphe}>Lore
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-4 mid_col">
                        <div className="content_descr">
                            <h2><span><i className="fa-solid fa-square-check fa-bounce"></i></span> ACHEVEE</h2>
                            <p className={styles.paragraphe}>Lore
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-4 end_col">
                        <div className="content_descr hero">
                            <div className='background-morph3'></div> 
                            <h2><span><i className="fa-solid fa-play fa-fade"></i></span> A VENIR</h2>
                            <p className={styles.paragraphe}>
                                Lore
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}