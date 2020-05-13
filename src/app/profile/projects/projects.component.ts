import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { PROJECTS } from 'src/app/projects-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS;
  constructor() { }

  ngOnInit(): void {
  }

}
