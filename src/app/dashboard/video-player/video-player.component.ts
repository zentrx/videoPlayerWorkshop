import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from './../../types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() video: Video;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }


  getVideo(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.video.id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
