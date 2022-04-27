import React from 'react';
import classes from './EachUser.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

const EachUser = (props) => {

    AOS.init();

    return (<div className={classes.All} data-aos="fade-right">
        <img src={'https://cdnimg.rg.ru/img/content/228/88/86/210330_Ryu_Sobakasu_TRL_txtles_2398p_2048_858_Rec709.00430_t_650x433.jpg'}
             alt={'ava'} className={classes.ava}/>
        <div className={classes.info}>
            <div className={classes.name}>{props.name}</div>
            <div> Новость: </div>
            <div className={classes.message}>{props.message}</div>
        </div>
    </div>)
}

export default EachUser