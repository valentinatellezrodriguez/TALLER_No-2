export class Student{
    numero_id: number;
      nombre: string;
      telefono:number;
      edad: number;

      constructor(num:number,nom:string,tel:number,ed:number){
        this.nombre=nom;
        this.numero_id=num;
        this.telefono=tel;
        this.edad=ed
      }
}