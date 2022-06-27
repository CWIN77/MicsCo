export interface IComicList {
  readonly id:string;
  readonly title:string;
  readonly explane:string;
  readonly img:string;
  readonly safety:number;
  readonly genre:number[];
  readonly ownerScore:number;
  readonly publishInform:number;
  readonly assess: {
    readonly score:number
  }[];
}

export interface IComic {
  readonly writer:string;
  readonly owner: string;
  readonly publishDate: number;
  readonly assess: {
    readonly owner:string;
    readonly comment:string;
    readonly score:number;
  }[];  
  readonly createdAt?:string;
}

export interface IUser {
  readonly name:string;
  readonly id:string;
  readonly img:string;
} 

export type ISetState<T>= React.Dispatch<React.SetStateAction<T>>
