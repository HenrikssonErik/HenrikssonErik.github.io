export class Post {
  title: string;
  content: string;
  timeStamp: Date;
  poster?: string;
  status: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.timeStamp = new Date();
    this.status = 'Publicerad';
  }
}
