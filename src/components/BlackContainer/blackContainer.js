import styles from './blackContainer.module.css'

const BlackContainer = () => {
    return (
        <div className='row hero mt-5' >
            <div className={`col-md-6 ${styles.div_baground_image}`}>
            <div className={`${styles.divBack} mt-5`}>
            <h2>Let's Work together</h2>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className={`btn btn-outline-light ${styles.btn_don}`} type="submit">Contact Us</button>
            
            </div>
            </div>
            <div className={`col-md-6 ${styles.div_right}`}>
                <h2>We Can Do Many Things together</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, quibusdam. Quasi, voluptatum. Quisquam, quibusdam. 
                    Quasi, voluptatum. Quisquam, quibusdam. Quasi, voluptatum. 
                    Quisquam, quibusdam. Quasi, voluptatum. Quisquam, quibusdam. 
                    Quasi, voluptatum. Quisquam, quibusdam. Quasi, voluptatum. 
                    Quisquam, quibusdam. Quasi, voluptatum. Quisquam, quibusdam. 
                    Quasi, voluptatum. Quisquam, quibusdam. Quasi, voluptatum. 
                    Quisquam, quibusdam. Quasi, voluptatum. Quisquam, quibusdam. 
                    Quasi, voluptatum. Quisquam, quibusdam. Quasi, voluptatum. 
                    Quisquam, quibusdam. Quasi, voluptatum. Quisquam, quibusdam. 
                    Quasi, voluptatum.
                </p>
            </div>
        </div>
    );
}

export default BlackContainer;