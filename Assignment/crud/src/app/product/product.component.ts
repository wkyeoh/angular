import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from '../app.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

 
  nationalitys = ['Malaysian','Singaporean'];
  countries: string[] = ['MY', 'SG'];
  

  constructor(private http: Http) { }
  confirmationString:string = "New Product Added";
  isAdded: boolean = false;
  productsObj:object = {}; 
  
  addNewProduct = function(product) {
    this.productObj = {  
      "First_Name": product.First_Name,
      "Last_Name": product.Last_Name,
      "Nationality": product.nat,
      "Identity_No": product.Identity_No,
      "Birthdate": product.Birthdate,
      "Contact_No": product.Contact_No,
      "Address": product.Address,
      "City": product.City,
      "State": product.State,
      "Post_Code": product.Post_Code,
      "Country": product.Country,
      "Email": product.Email,
      "Bank_Account": product.Bank_Account,
      "Issue_Bank": product.Issue_Bank,
      "Attachment": product.Attachment
    }
    this.http.post("http://localhost:3000/products/", this.productObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }
  
  ngOnInit() {
  }

}
