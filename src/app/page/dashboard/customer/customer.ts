import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerModel } from '../../../../model/type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  imports: [NgForOf, FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  customerList: any = [];
  customerObj: CustomerModel = {
    id: '',
    title: '',
    name: '',
    dob: '',
    salary: '',
    address: '',
    city: '',
    province: '',
    postalcode: '',
  };
  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.http.get('http://localhost:8080/customer/all').subscribe((data) => {
      console.log(data);
      this.customerList = data;
    });
  }
  addCustomer(): void {
    console.log(this.customerObj);
    this.http.post('http://localhost:8080/customer/add', this.customerObj).subscribe((data) => {
      console.log(data);
      if (data === true) {
        Swal.fire({
          title: 'Good Job!' + this.customerObj.name + 'Saved!',
          icon: 'success',
        });
      }
      this.getAll();
    });
  }
  deleteCustomer(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/customer/delete-by-id/${id}`).subscribe((data) => {
          if (data === true) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
            this.getAll();
          }
        });
        console.log('http://localhost:8080/customer/delete-by-id/' + id);
      }
    });
  }
  update(): void {
    console.log(this.customerObj);
    this.http.put('http://localhost:8080/customer/update', this.customerObj).subscribe(data => {
        console.log(data);
        if (data === true) {
          Swal.fire({
            title: 'Update Success!' + this.customerObj.id + 'Saved!',
            icon: 'success',
          })        
        }
        this.getAll();
      })
  }
}
