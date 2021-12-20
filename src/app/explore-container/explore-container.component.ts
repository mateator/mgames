import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() description: string;
  @Input() imgUrl: string;
  @Input() imgUrlScreen: string;
  @Input() guguelPhlay: string;

  constructor(private router: Router) { }

  ngOnInit() {}

    next(){
      console.log('s');
      this.router.navigate(['/tabs/tab' + (parseInt(this.id,10) + 2)]);
    }
    previous(){
      console.log('s');
      this.router.navigate(['/tabs/tab' + (parseInt(this.id,10))]);
    }
}
