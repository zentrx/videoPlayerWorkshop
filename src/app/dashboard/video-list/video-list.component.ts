import { Video } from './../../types';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videos: Observable<Video[]>;
  @Input() selected: Video;
  @Output() selectedVideo = new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {
  }

  picked(video: Video) {
    this.selected = video;
    this.selectedVideo.emit(video);
  }
}
