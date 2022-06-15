import * as React from 'react';
import './main.css'
import styles0 from './main.css'
import styles from './index.less'
import styles2 from './index.module.css';
// Delete me
export const Thing = () => {
    return <div style={{textAlign:"center", width:'30%', border:'1px solid red'}}>
        <div className={'main'}>❌import './main.css' 这样使用不支持了.</div>
        <div className={styles0.main}>✅import styles0 from './main.css'</div>
        <div className={styles.main}>✅import styles from './index.less'</div>
        <div className={styles2.big}>✅import styles2 from './index.module.css'</div>
        <div>the red border bound Thing element</div>
    </div>;
};
