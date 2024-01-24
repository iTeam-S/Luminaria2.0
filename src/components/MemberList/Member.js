import styles from "./memberList.module.css";

const Member = ({ member }) => {
    return (
        <div className={styles.member}>
            <div className={styles.member_info}>
                <img className={styles.member_image} src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
            </div>
        </div>
    );
};

export default Member;