export interface IComicList {
  readonly id:string;
  readonly title:string;
  readonly explane:string;
  readonly writer:string;
  readonly img:string;
  readonly safety:number;
  readonly genre:number[];
  readonly score:number;
  readonly createdAt:string;
  readonly updatedAt:string;
}