import { Component } from '@angular/core';

@Component({
  selector: 'app-router-anim',
  templateUrl: './router-anim.component.html',
  styleUrls: ['./router-anim.component.scss']
})
export class RouterAnimComponent {

  public markdownHtml =
    `
    \`\`\`html
      <div [@routeAnimations]="prepareRoute(outlet)">
        <router-outlet #outlet="outlet"></router-outlet>
      </div>
    \`\`\`
    `;

  public markdownTs =
    `
  \`\`\`typescript
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  \`\`\`
  `;

  public markdownAppRouting =
    `
  \`\`\`typescript
  const routes: Routes = [
    { path: 'simple', component: SimpleAnimComponent, data: { animation: 'SimplePage' } },
    { path: 'router', component: RouterAnimComponent, data: { animation: 'RoutePage' } },
    { path: 'lists', component: ListsAnimComponent, data: { animation: 'ListsPage' } },
    { path: '**', component: SimpleAnimComponent },
  ];
  \`\`\`
  `;


  public markdownRoutesAnim =
    `
    \`\`\`typescript
    import { trigger, transition, style, query, animateChild, animate, group } from "@angular/animations";

    export const slideInAnimation =
      trigger('routeAnimations', [
        transition('SimplePage <=> RoutePage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
      \`\`\`
      `;

  public markdownImportAnim =
    `
    \`\`\`typescript
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss'],
      animations: [slideInAnimation]
    })
    export class AppComponent implements OnInit...
    \`\`\`
    `;

}
