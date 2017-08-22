import 'hammerjs';
import 'hammer-timejs';
import * as propagating from 'propagating-hammerjs';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    let mc = propagating(new Hammer(element, {
      touchAction: "auto",
    }));
    return mc;
  }
}