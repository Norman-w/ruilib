import React from 'react';
import classNames from './AnswerSelector.module.css';
import { DefaultAnswerOption } from "./DefaultAnswerOption";
import {IOption, IProp, IState, OptionMode} from "./interfaces";

// import 'antd/dist/antd.css'

export class AnswerSelector extends React.PureComponent<IProp,IState>{
  // state:IState ={
  //   answers:[],
  //   hoverAnswerIndex:-1,
  // }
  componentDidMount() {
    // console.log('问答选择组件已加载');
    this.showAnswers(this.props.answers)
  }

  componentWillReceiveProps(nextProps: Readonly<IProp>, nextContext: any) {
    if (nextProps.answers!== this.state.answers)
    {
      this.showAnswers(nextProps.answers);
    }
    if (process && process.env && process.env.NM)
    {
      console.log(nextContext);
    }
  }

  showAnswers(answers:IOption[])
  {
    this.setState({answers:answers});
  }

  constructor(props:IProp) {
    super(props);
    this.state = {
        answers:[],
        hoverAnswerIndex:-1,
      }
  }

  //获取样式的class名称
  getStyleClassName(mode:OptionMode,hovered:boolean,selected:boolean)
  {
    let ret:string = classNames.node;
    switch (mode) {
      case "disabled":
        ret = classNames.node_mode_disabled;
        break;
      case "suggested":
        ret = classNames.node_mode_suggested;
        break;
      case "error":
        ret = classNames.node_mode_error;
        break;
      case "info":
        ret = classNames.node_mode_info;
        break;
      case "warn":
        ret = classNames.node_mode_warn;
        break;
    }
    //如果鼠标悬停并且设置了支持悬停样式的话
    if (hovered && this.props.enableHoverStyle !== false)
    {
      ret +=' '+ classNames.node_action_Hover;
    }
    if(selected)
    {
      ret +=' '+ classNames.node_action_Selected;
    }
    return ret;
  }

  render() {
    if (!this.state || !this.state.answers)
    {
      return <div>选项加载中...</div>
    }
    //region 根据元素的个数计算宽度,使用元素个数开平方的方式.比如9个,是三行三列,10个,就是根号10的Math.Floor +1 为每行数量
    let nodeCount = this.state.answers.length;
    let colCount = nodeCount;
    let rowCount = 1;
    if(colCount>3 && this.props.singleLineMode !== true) {
      colCount = Math.sqrt(nodeCount);
      if (Math.floor(colCount)<colCount)
      {
        colCount = Math.floor(colCount) + 1;
      }
      // console.log('列数量是:', colCount);
      rowCount = nodeCount/ colCount;
      if (Math.floor(rowCount)<rowCount)
      {
        //除完了不是整数,要多出来了一点.那就是多出来一行
        rowCount = Math.floor(rowCount) +1;
      }
    }
    else {
      //row count 还是等于1
      //rowCount =1;
    }
    //endregion
    return (
      <div className={classNames.main}>
        {this.state.answers.map((item:IOption,index)=>
        {
          let aClass = this.getStyleClassName(item.mode?item.mode:'info',this.state.hoverAnswerIndex === index, false);

          // console.log(item.mode)
          // console.log('aClass is :' , aClass);
          //region 可选择的元素,如果指定了dom的话,就显示dom,如果没有指定,就用默认的来展示
          let answerOptionDom:JSX.Element;
          if (item.content)
          {
            answerOptionDom=item.content;
          }
          else
          {
            answerOptionDom = <DefaultAnswerOption title={item.title} desc={item.desc}/>
          }
          //endregion
          //region 根据元素的个数计算宽度,一共留下10%的空隙,然后让flex自动去分. 但是这些元素的大小要始终均分90%;
          let widthPercent = 90/colCount;
          let heightPercent = 90/rowCount;
          //endregion
          return   <div className={aClass}
                        key={item.id}
                        style={
                          {
                            width:''+widthPercent+'%',
                            height:'' + heightPercent + '%',
                        }}
                        onMouseEnter={()=>{this.setState({hoverAnswerIndex:index})}}
                        onMouseLeave={()=>{this.setState({hoverAnswerIndex:-1})}}
                        onClick={()=>{
                          if (this.props.onSelectAnswer)
                          {
                            this.props.onSelectAnswer(item);
                          }
                        }}
          >
            {answerOptionDom}
          </div>
        })}
      </div>
    );
  }
}
