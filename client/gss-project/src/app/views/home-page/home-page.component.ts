import { Component, OnInit } from '@angular/core';
import axios, { Axios } from 'axios';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  async testDataBase(): Promise<void> {
    axios({
      method: 'post',
      url: 'http://localhost:8080/post/helloWorld',
      data: {
        id: '2022-04-25',
        title: 'hello',
        content: 'world',
      },
    });
  }

  ngOnInit(): void {}
}
