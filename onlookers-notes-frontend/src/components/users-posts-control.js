import React from 'react'
import styles from './users-posts-style.module.css'

export default function UsersPostsControl(allUsersPosts, onFindAll) {
    let usersPosts = []
    let users = []
    let posts = []
    // for (const i in allUsersPosts['allUsersPosts']){
    //     usersPosts.push(allUsersPosts['allUsersPosts'][i]['user']);
    // }

    for (const i in allUsersPosts['allUsersPosts']){
        usersPosts.push(allUsersPosts['allUsersPosts'][i]['user']);
        users.push(allUsersPosts['allUsersPosts'][i]['user'])
    }

    for (const i in users){
        console.log(users);
    }

    console.log(posts)

    console.log(usersPosts)
    return (
        <div>

        </div>
        // <div className={styles.maindiv}>
            
        //     {usersPosts.map(({id, name, username, company, posts}) => {
        //        return <div key={id}  className={styles.usercard}>
        //             <label> {username} - {company.name} </label>
        //             <label> {name} </label>
        //             <div>
        //                 <label>{}</label>
        //             </div>
        //         </div>
                
        //     })}
                 
        // </div>
    );
}