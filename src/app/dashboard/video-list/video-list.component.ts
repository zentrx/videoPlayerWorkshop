import { Video } from './../../types';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videos;
  @Input() selected: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  update(video: Video) {
    this.router.navigate([], {
      queryParams: {
        id: video.id
      },
      queryParamsHandling: 'merge'
    });
  }
}
