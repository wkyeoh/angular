import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data:object = {};
  products = [];
  productObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }
  
  updateProduct(product) {
    this.productObj = {
      "First_Name": product.First_Name,
      "Last_Name": product.Last_Name,
      "Nationality": product.Nationality,
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
      "Attachment": product.Attachment,
    };
    const url = `${"http://localhost:3000/products"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.productObj), {headers:this.headers})
    .toPromise()
    .then( () => {
      this.router.navigate(['/']);
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:3000/products").subscribe(
      (res: Response) => {
        this.products = res.json();
        for(var i = 0; i< this.products.length ; i++){
          if(parseInt(this.products[i].id) === this.id) {
            this.data = this.products[i];
            break;
          }
        }
      }
    )
  }
}
