export interface IOption {
    id?:string,
    title?:string,
    desc?:string,
    content?:JSX.Element
}
export interface OnSelectedOptionEventHandler
{
    (selectedOption:IOption):void;
}
export interface IProp {
    answers:IOption[],
    onSelectAnswer:OnSelectedOptionEventHandler
}
export interface IState {
    answers:IOption[],
    hoverAnswerIndex:number
}