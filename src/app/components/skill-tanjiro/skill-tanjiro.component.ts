import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skill-tanjiro',
  template: '<youtube-player videoId="-LL6NPUevGk" suggestedQuality="highres" [height]="400" [width]="1000" [startSeconds]="7" [endSeconds]="354"></youtube-player>',
  styleUrls: ['./skill-tanjiro.component.css']
})
export class SkillTanjiroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
