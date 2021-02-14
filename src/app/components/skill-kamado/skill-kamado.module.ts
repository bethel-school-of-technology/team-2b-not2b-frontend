import {NgModule} from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { SkillKamadoComponent } from './skill-Kamado.component';



@NgModule({
  imports: [
    YouTubePlayerModule,
  ],
  declarations: [ SkillKamadoComponent ],
  exports: [ SkillKamadoComponent ]
})
export class VideoModule {}