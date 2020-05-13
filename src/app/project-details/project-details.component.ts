import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PROJECTS } from '../projects-list';
import { Project } from '../project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;


  id: number;
  currentProject: Project;
  constructor(private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.currentProject = this.getProject(this.id);
  }

  getProject(id: number): Project {
    return ( PROJECTS[id] );
  }
}
