import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.types';
import { Observable } from 'rxjs';
import { Questionnaire } from './questionnairies.types';

@Injectable({
  providedIn: 'root'
})
export class QuestionnairiesService {

  host = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Questionnaire[]> {
    return this.httpClient.get<Questionnaire[]>(`${this.host}/questionnairies`);
  }

  create(questionnaire: Questionnaire) {
    return this.httpClient.post<Questionnaire>(`${this.host}/questionnairies`, questionnaire);
  }

  getById(id: number) {
    return this.httpClient.get<Questionnaire>(`${this.host}/questionnairies/${id}`);
  }

  update(questionnaire: Questionnaire) {
    return this.httpClient.put<any>(`${this.host}/questionnairies/${questionnaire.id}`, questionnaire);
  }
}