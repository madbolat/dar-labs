import { Component, OnInit } from '@angular/core';
import { QuestionnairiesService } from '../shared/questionnairies.service';
import { Questionnaire } from '../shared/questionnairies.types';

@Component({
  selector: 'app-questionnairies',
  templateUrl: './questionnairies.component.html',
  styleUrls: ['./questionnairies.component.scss']
})
export class QuestionnairiesComponent implements OnInit {

  constructor(private questionnairiesService: QuestionnairiesService) { }

  questionnairies: Questionnaire[] = [];

  ngOnInit(): void {
    this.questionnairiesService.getAll()
      .subscribe(data => {
        console.log(data)
        this.questionnairies = data;
      });
  }

}