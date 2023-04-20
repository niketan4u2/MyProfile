import { Component , OnInit} from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skills:Skill[] =[
    {
      name:'Angular, Angular Material',
      level:'Expert',
      rating: 80,
    },
    {
      name:'HTML, CSS, JavaScript',
      level:'Expert',
      rating: 90,
    },
    {
      name:'Core Java',
      level:'Intermidiate',
      rating: 70,
    },
    {
      name:'Advance Java',
      level:'Intermidiate',
      rating: 65,
    },
    {
      name:'Selenium',
      level:'Expert',
      rating: 80,
    },
    {
      name:'MySQL',
      level:'Intermidiate',
      rating: 60,
    },
    {
      name:'EggPlant',
      level:'Expert',
      rating: 90,
    },
    {
      name:'Node JS',
      level:'Intermidiate',
      rating: 60,
    },
    {
      name:'Python',
      level:'Beginner',
      rating: 50,
    },
  ]

  constructor(){}
  ngOnInit(): void {
      
  }
}
