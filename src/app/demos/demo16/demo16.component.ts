import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html',
  styleUrls: ['./demo16.component.scss']
})
export class Demo16Component implements OnInit {

  id!: number;
  name!: string;

  constructor (private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit (): void {
    // console.log(this._router);
    console.log(this._activatedRoute);

    if (this._activatedRoute.snapshot.params['id']) this.id = this._activatedRoute.snapshot.params['id'];
    if (this._activatedRoute.snapshot.queryParams['name']) this.name = this._activatedRoute.snapshot.queryParams['name'];
  }

  navigate (): void {
    this._router.navigate(['demos', 'routage']); // localhost:4200/demos/routage
  }

  navigateWithParams (): void {
    this._router.navigate(['demos', 'routage', 42]); // Le paramètre sera traité par :id dans le router
  }

  navigateWithQuery (): void {
    this._router.navigate(['demos', 'routage'], { queryParams: { 'name': 'Quentin' } });
  }

}
