import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './Login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  

  private baseUrl = 'http://localhost:8081/api/v1/';
  constructor(private http: HttpClient) {}

  loginConsumer(login: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}` + 'loginConsumer', login));
    return this.http.post(`${this.baseUrl}` + 'loginConsumer', login);
  }

  changePassword(login:Object):Observable<Object> {
    console.log(this.http.put(this.baseUrl + 'changePass', login));
    return this.http.put(this.baseUrl + 'changePass', login);
  }

  createLogin(login: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}` + 'addLogin', login));
    return this.http.post(`${this.baseUrl}` + 'addLogin', login);
  }

  createConsumer(consumer: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}` + 'addConsumer', consumer));
    return this.http.post(`${this.baseUrl}` + 'addConsumer', consumer);
  }

  createTransaction(transaction: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}` + 'addTransaction', transaction));
    return this.http.post(`${this.baseUrl}` + 'addTransaction', transaction);
  }

createEmi(emi: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}` + 'addemi', emi));
    return this.http.post(`${this.baseUrl}` + 'addemi', emi);
  }

  displayConsumer(){
    console.log(this.http.get<any[]>(this.baseUrl + 'consumer'));
    // myList Number[]=this.http.get<Number[]>(this.baseUrl+'employees')
    return this.http.get<any[]>(this.baseUrl + 'consumer');
  }

  displayTransaction(card:any){
    console.log(this.http.get<any[]>(this.baseUrl + 'transactionDetails'+card));
    // myList Number[]=this.http.get<Number[]>(this.baseUrl+'employees')
    return this.http.get(this.baseUrl + 'transactionDetails/'+card);
  }

  displayEmi(card:any){
    console.log(this.http.get<any[]>(this.baseUrl + 'cardDetails'+card));
    // myList Number[]=this.http.get<Number[]>(this.baseUrl+'employees')
    return this.http.get(this.baseUrl + 'cardDetails/'+card);
  }

  activateConsumer(id:any){
    console.log(this.http.put(this.baseUrl + 'activateConsumer/'+id, httpOptions));
    return this.http.put(this.baseUrl+'activateConsumer/'+id,httpOptions);
  }

  deleteConsumer(id:number): Observable<any>{
    console.log(this.baseUrl + 'delConsumer/'+id);
    return this.http.delete<any[]>(this.baseUrl+'delConsumer/' +id);
  }
}
