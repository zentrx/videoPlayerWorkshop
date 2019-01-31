import { VideoDataService } from './../../video-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videos: Observable<Video[]>;
  selected: Observable<string>; // this is going to be an observable video id

  constructor(private svc: VideoDataService, route: ActivatedRoute) {
    this.videos = this.svc.loadVideos();
    this.selected = route.queryParams
      .pipe(
        map(params => params.id)
      );
   }

  ngOnInit() {
  }

}
