import React from 'react';
import styles from './index.less'

interface IProps
{
    name:string,
    color:string
}
interface IState
{
    hover:boolean,
}
export class Tag extends React.PureComponent<IProps,IState> {
    render() {
        const s = (this.state && this.state.hover)? styles.tagHover : styles.tag;
        return <div className={s} style={{color: this.props.color}}
                    onMouseEnter={
                        () => {
                            this.setState({hover: true})
                        }
                    }
                    onMouseLeave={
                        () => {
                            this.setState({hover: false})
                        }
                    }
        >{this.props.name}</div>
    }
}