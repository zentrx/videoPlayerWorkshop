import { Component,  OnInit, Input } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() video;

  constructor() { }

  ngOnInit() {
  }

  getThumbnail(): string {
    return 'https://img.youtube.com/vi/' + this.video.id + '/default.jpg';
  }

}
