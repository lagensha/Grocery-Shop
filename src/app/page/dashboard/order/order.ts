import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { OrderModel } from '../../../../model/type';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  orderList: OrderModel[] = [];

  orderObj: OrderModel = {
    id: '',
    orderDate: '',
    customerId: '',
  };

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.getAll();
  }

  getAll() {
    this.http.get<OrderModel[]>('http://localhost:8080/order/getAll').subscribe((data) => {
      this.orderList = data;
      console.log(this.orderList);
      this.cdr.detectChanges();
    });
  }
}
