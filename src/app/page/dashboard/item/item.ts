import { Component } from '@angular/core';
import { ItemModel } from '../../../../model/type';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  imports: [NgForOf,FormsModule],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  itemList: any=[];
 itemobj: ItemModel = {
  itemCode: '',
  description: '',
  packSize: '',
  unitPrice: 0,
  qtyOnHand: 0
};
  constructor(private http: HttpClient){
    this.getAll();
  }
  getAll(){
    this.http.get<any[]>('http://localhost:8080/item/all').subscribe((data) =>{
        console.log(data);
        this.itemList=data
    });
  
  }

  deleteItem(itemCode:string){
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
    
             this.http.delete(`http://localhost:8080/item/delete-by-id/${itemCode}`).subscribe(data => {
               if (data === true) {
                 Swal.fire({
                   title: "Deleted!",
                   text: "Your file has been deleted.",
                   icon: "success"
                 });
                 this.getAll();
               }
             })
             console.log("http://localhost:8080/item/delete-by-id/"+itemCode)
     }
        })
  }
addItem() : void{
  console.log(this.itemobj);
  this.http.post('http://localhost:8080/item/add',this.itemobj).subscribe(data=>{
    console.log(data);
    if(data===true){
         Swal.fire({
                title:"Good Job!"+this.itemobj.itemCode+"Saved!",
                icon:"success"
              })
            }
            this.getAll();
          })
    }
    update():void{
      console.log(this.itemobj);
      this.http.put<boolean>('http://localhost:8080/item/update',this.itemobj).subscribe(data=>{
        console.log(data);
        if(data===true){
         Swal.fire({
                title:"Update Success!"+this.itemobj.itemCode+"Saved!",
                icon:"success"
              })
            }
            this.getAll();
          })
    }
}

