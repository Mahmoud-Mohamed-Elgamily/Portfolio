import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  my_data = {
    name: "Mahmoud",
    image: "assets/images/profile.jpg",
    about: `A dedicated and energetic individual,
    Always trying to imporve my knowledge 
    and learn new technologies to stay up
    to date with the market requirements.`,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
