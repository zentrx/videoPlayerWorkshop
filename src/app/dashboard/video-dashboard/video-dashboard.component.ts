import { VideoDataService } from './../../video-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videos: Observable<Video[]>;
  selectedVideo: Video;

  constructor(private videoSvc: VideoDataService) {
    this.videos = this.videoSvc.loadVideos();
   }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }

}
