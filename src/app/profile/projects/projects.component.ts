import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id:0,
      name:"Crowd Funding",
      description:"website to help charity people reach others and gather donations !",
      image:"assets/images/crowdFuncing.png",
      link:"https://github.com/Mahmoud-Mohamed-Elgamily/iti_ruby_onrails_progect"
    },
    {
      id:1,
      name:"Events",
      description:"Event managing website developed as a part of NODE JS course evaluation at ITI",
      image:"assets/images/events.png",
      link:"https://github.com/Mahmoud-Mohamed-Elgamily/iti_ruby_onrails_progect"
    },
    {
      id:2,
      name:"Yala notlob",
      description:"application thats give the user ability to add friends and groups then make an order from whatever restaurants also with valid authentication and great views for user",
      image:"assets/images/rails.png",
      link:"https://github.com/Mahmoud-Mohamed-Elgamily/iti_ruby_onrails_progect"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
