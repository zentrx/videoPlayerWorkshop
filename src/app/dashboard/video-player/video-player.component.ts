import { VideoDataService } from './../../video-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from './../../types';
import { switchMap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  video$: Observable<Video>;

  constructor(private svc: VideoDataService, route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.video$ = route.queryParams
      .pipe(
        map(params => params.id),
        filter(id => !!id),
        switchMap(id => svc.loadVideo(id))
      );
  }

  ngOnInit() {
  }

  getVideo(id): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
