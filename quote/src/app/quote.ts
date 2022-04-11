export class Quote {
  splice(index: any, arg1: number) {
    throw new Error('Method not implemented.');
  }
  showDescription: boolean;
  constructor( public id:number,
   public name:string,
   public description:string,
   public author:string,
   public datePosted:Date,
   public likes:number,
   public dislikes:number,){
   this.likes=0;
   this.dislikes=0;
  this.showDescription=false
   }
}


