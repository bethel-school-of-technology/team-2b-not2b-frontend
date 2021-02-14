import {NgModule} from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { SkillTanjiroComponent } from './skill-tanjiro.component';



@NgModule({
  imports: [
    YouTubePlayerModule,
  ],
  declarations: [ SkillTanjiroComponent ],
  exports: [ SkillTanjiroComponent ]
})
export class VideoModule {}