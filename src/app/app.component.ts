import { Component, OnInit } from '@angular/core';
import { AppservicetsService } from './appservicets.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  public posts = [];

  public categories$ = this.appService.product$;

  constructor(
    private appService: AppservicetsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Below code is fetch products using getProducts method.
    // this.appService.getProducts().subscribe((data: any) => {
    //   this.posts = data;
    //   console.log(this.posts);
    // });
  }
}
