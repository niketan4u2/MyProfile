import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{

  myData : string[][]=[
    ['Name','Niketan Kumar'],
    ['DOB','27/12/1997'],
    ['Work Exp.','2 Years'],
    ['Education','B.E (Aug-2020)'],
    ['Interests','Cricket']
  ];

  aboutMe : string[] = [
    'Hi, I am a Software Enginner with 2 years of experience in software industry.',
    'Worked on the VDL application where my role was Design and develop the page as per requirement and test the application alogn with fixed the bugs reported by the teams.',
    'Delivered all requirement within deadlines. Always eager to learn new technologies.',
    'Currently working as a automation script developer.'
  ]
  constructor(){}
  
  ngOnInit(): void {
      
  }

}
