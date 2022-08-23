import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class AppservicetsService {
  constructor(private httpClient: HttpClient) {}

  private url = 'https://fakestoreapi.com/products/category/jewelery';

/* modificar el objeto de los usuarios agregando otra propiedad updatedPrice.*/
   product$ = this.httpClient.get<any[]>(this.url).pipe(
     tap((users) => console.log(JSON.stringify(users))),
     map((users) =>
       users.map((user) => ({
         ...user,
         updatedPrice: user.price * 10,
       }))
    ),
     tap((user) => console.log('UPdated Data' + JSON.stringify(user)))
   );

  /*Obtener los datos de los usuarios y mostrarlos en HTML*/
  productFormateado$ = this.httpClient
    .get<any[]>(this.url)
    .pipe(tap((users) => console.log(JSON.stringify(users))));
}
