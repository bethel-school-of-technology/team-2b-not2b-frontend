import {NgModule} from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { SkillNezukoComponent } from './skill-Nezuko.component';



@NgModule({
  imports: [
    YouTubePlayerModule,
  ],
  declarations: [ SkillNezukoComponent ],
  exports: [ SkillNezukoComponent ]
})
export class VideoModule {}