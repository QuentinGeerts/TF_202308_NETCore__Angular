import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component implements OnInit {

  maVariable1!: string; // definite assignment assertion
  maVariable2: number = 42;
  declare maVariable3: boolean; // ambient declaration

  maVariable4?: string; // null ou undefined
  maVariable5: null = null; 
  maVariable6: undefined;
  maVariable7: any[] = [
    "Chaine", 42, true, [], {}, () => { console.log("Heyo 😋"); 
  }]
  maVariable8: [string, number] = ["b0001", 3223];

  ngOnInit (): void {
    this.maVariable1 = "Hello World !";
    this.maVariable3 = true;
  }
  
}
