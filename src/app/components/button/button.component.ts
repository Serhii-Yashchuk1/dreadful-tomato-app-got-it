import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UI_CONSTANTS as UI } from 'src/app/constants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string = UI.txt_free_trial;
  @Output() onClick = new EventEmitter<void>();
}
