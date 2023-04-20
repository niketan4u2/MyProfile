import { Component, OnInit } from '@angular/core';
import { project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : project[]=[
    {
      title : 'Voicera Dailer Lite',
      technology : 'Java MVC framework, JSP, Twilio Programable SMS, Voice, Call,',
      description: [
        'Worked as a tester and finding the bugs in the application.',
        'Later on worked as developer add developed multiple pages and implimented that.',
      ]
      
    },
    {
      title : 'Core speciality',
      technology: 'Eggplant Software tools',
      description:[
        'Explored the new technology like Eggplant.',
        'Wored as a automation script developer and developed the multiple script for the application'
      ]
    }
  ]

  constructor(){}

  ngOnInit(): void {
      
  }

}
