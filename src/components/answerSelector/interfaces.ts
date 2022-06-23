export type OptionMode = 'info' | 'warn' | 'error' | 'disabled' | 'suggested'

export interface IOption {
  //选项的id
  id?: string,
  //不使用content的时候,显示的标题
  title?: string,
  //不使用content的时候,显示的描述内容
  desc?: string,
  // //选项是否被禁用.被禁用的时候显示为被禁用的样式,并且不响应事件
  // disable?:boolean
  // //选项是否被推荐,被推荐的选项高亮显示
  // suggest?:boolean
  //选项如果没有指定desc的话,会渲染这个content作为内部内容.类型为jsx对象内容.也就是<div/>这样的 类似antd的modal里面显示的content
  content?: JSX.Element,
  //显示模式
  mode?: OptionMode,
}

export interface OnSelectedOptionEventHandler {
  (selectedOption: IOption): void;
}

export interface IProp {
  answers: IOption[],
  onSelectAnswer: OnSelectedOptionEventHandler,
  //是否开启鼠标悬停样式
  enableHoverStyle?: boolean,
  singleLineMode?:boolean,
  //是否为多选模式,多选模式时,点击一下元素进行选择,再点一下取消选择,并且该控件可设置提供一个确认或者完成的按键
  // multiSelectMode:boolean
}

export interface IState {
  answers: IOption[],
  hoverAnswerIndex: number
}
