import { Component , OnInit} from '@angular/core';
import { WorkExperence } from '../models/models';

@Component({
  selector: 'app-work-experence',
  templateUrl: './work-experence.component.html',
  styleUrls: ['./work-experence.component.css']
})
export class WorkExperenceComponent implements OnInit{

  workExpList : WorkExperence[] = [
    {
      role:'Software Engineer',
      company: 'Voicera Analytics Private Limited',
      duration: 'Dec 2021 - Currently',
      description : [
        'Worked on the VDL project where my role was design and develop pages and testing application.',
        'Working on the core speciality project where my role is Automation script developer.'
      ]
    },
    {
      role:'Software Engineer Trainee',
      company: 'Voicera Analytics Private Limited',
      duration: 'Jun 2021 - Dec 2021',
      description : [
        'Completed the Training period.',
        'Worked on the different technologies such as (Core Java, JSP, Spring Framework, MySQL, Jenkins )'
      ]
    }
    
  ]

  constructor(){}

  ngOnInit(): void {
      
  }

}
