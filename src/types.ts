export interface IComicList {
  readonly id:string;
  readonly title:string;
  readonly explane:string;
  readonly writer:string;
  readonly img:string;
  readonly safety:number;
  readonly genre:number[];
  readonly score:number;
  readonly publish:number;
  readonly createdAt:string;
  readonly updatedAt:string;
}

export interface IUser {
  readonly name:string;
  readonly id:string;
  readonly img:string;
} 

export type ISetState<T>= React.Dispatch<React.SetStateAction<T>> 