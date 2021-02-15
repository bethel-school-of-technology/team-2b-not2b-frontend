import { Component, OnInit } from '@angular/core';

// import { YouTubePlayerModule } from '@angular/youtube-player';


@Component({
  selector: 'app-skill-tanjiro',
  templateUrl: "./skill-tanjiro.component.html",
  styleUrls: ['./skill-tanjiro.component.css']
})
export class SkillTanjiroComponent {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
