import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-anim',
  templateUrl: './angular-anim.component.html',
  styleUrls: ['./angular-anim.component.scss'],
  animations: [
    trigger('textTrigger', [
      state('small',
        style({
          height: '500px',
          width: '250px'
        })
      ),
      state('big',
        style({
          height: '200px',
          width: '1000px'
        })
      ),
      transition('small <=> big', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class AngularAnimComponent {

  public currentState = 'small';

  public changeState(): void {
    this.currentState = this.currentState === 'small' ? 'big' : 'small';
  }

  public markdownTextBlock =
    `
    \`\`\`typescript
    animations: [
      trigger('textTrigger', [
        state('small',
          style({
            height: '500px',
            width: '250px'
          })
        ),
        state('big',
          style({
            height: '200px',
            width: '1000px'
          })
        ),
        transition('small <=> big', [
          animate('0.3s ease-in-out')
        ])
      ])
    ]
      \`\`\`
      `;

  public markdownAnimFunc =
    `
    \`\`\`typescript
    import {
      trigger,
      state,
      style,
      animate,
      transition,
      // ...
    } from '@angular/animations';
      \`\`\`
      `;
}
