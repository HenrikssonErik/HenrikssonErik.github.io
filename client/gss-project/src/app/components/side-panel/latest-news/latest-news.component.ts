import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/news.model';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit {
  news: News[] = [
    new News(
      'Schackkväll 24/4 [BYOB]',
      'Den 24/4 kör vi schackkväll! Be there or be square. Byob = Bring your own bräde'
    ),
    new News(
      'Shack eller Tjack? Kom på klubbens drogupplyssningskväll!',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
