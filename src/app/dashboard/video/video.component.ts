import { Video } from './../../types';
import { Component,  OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

  getThumbnail(): string {
    return 'https://img.youtube.com/vi/' + this.video.id + '/default.jpg';
  }

}
