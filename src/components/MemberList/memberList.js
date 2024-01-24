import React from 'react';
import styles from './memberList.module.css';
import Member from './Member';

const MemberList = ({ members }) => {
    const displayedMembers = members.length > 5 ? members.slice(0, 5) : members;
    return (
        //si membre dpasse 4 alors on ajoute affiche 4 membres et on ajoute un bouton pour afficher les autres membres
        <div className={styles.member_list}>
            <h>Member</h>
            {displayedMembers.map((member) => (
                <Member member={member} key={member.id} />
            ))}
            {members.length > 5 && (
                <a href='#'>Voir plus</a>
            )}
        </div>
    );
};

export default MemberList;

