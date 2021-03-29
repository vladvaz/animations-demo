import { Component, OnInit } from '@angular/core';
import { ResolveEnd, Router, RouterOutlet, } from '@angular/router';
import { slideInAnimation } from 'src/animations/routes-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'animations-demo';

  public activeButton = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((routerData) => {
      if (routerData instanceof ResolveEnd) {
        const r = routerData.url;
        switch (r) {
          case '/simple':
            this.activeButton = 0;
            break;
          case '/angular':
            this.activeButton = 1;
            break;
          case '/router':
            this.activeButton = 2;
            break;
          default:
            this.activeButton = 0;
            break;
        }
      }
    })

  }

  public navPressed(value: number): void {
    this.activeButton = value;
    switch (value) {
      case 0:
        this.router.navigate(['simple'])
        break;
      case 1:
        this.router.navigate(['angular'])
        break;
      case 2:
        this.router.navigate(['router'])
        break;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
