import { Component,OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  educationList: Education[] = [
    
    {
      institute : 'Sri Venkateshwara Collage of Engineering Bangaluru(VTU)',
      course :'B.E (CSE)',
      duration : '2016-2020',
      score : '6.65/10 CGPA'
    },
    {
      institute : 'Muhamada Inter College Siwan Bihar',
      course :'12th',
      duration : '2014-2016',
      score : '60%'
    },
    {
      institute : 'DAV Public School Siwan Bihar',
      course :'scc',
      duration : '2012-2013',
      score : '7.2/10 CGPA'
    },
  ];

  constructor(){}

  ngOnInit(): void {
      
  }
}
