export interface CustomerModel {
  id: string;
  title: string;
  name: string;
  dob: string;
  salary: string;
  address: string;
  city: string;
  province: string;
  postalcode: string;
}

export interface ItemModel {
  itemCode: string;
  description: string;
  packSize: string;
  unitPrice: number;
  qtyOnHand: number;
}

export interface OrderModel{
  id:string;
  orderDate:string;
  customerId:string;
}
