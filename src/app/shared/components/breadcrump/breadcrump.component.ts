import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { filter } from 'rxjs';
import { BreadcrumpService } from 'src/app/services/breadcrump.service';

@Component({
  selector: 'app-breadcrump',
  standalone: true,
  imports: [RouterModule, TablerIconsModule],
  templateUrl: './breadcrump.component.html',
  styleUrl: './breadcrump.component.scss'
})
export class BreadcrumpComponent implements OnInit{
constructor(private activatedRoute: ActivatedRoute , private router: Router,  private breadcrumpService: BreadcrumpService) {
}
breadcrumbs: { label: string, url?: string }[] = [];
ngOnInit(){
  this.initBreadCrump();
  this.routerEvents();
}

routerEvents() {
  // listens for router changes init breadCrumpwhen  navigation finishes.
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.initBreadCrump();
  });
}

initBreadCrump() {
  this.createBreadcrumbs(this.activatedRoute.root);
  this.breadcrumbs = this.breadcrumpService.getData();
}
createBreadcrumbs(route: ActivatedRoute) : void{
  // creates breadcrumbs for the current route and childs.
  const children = route.children;
  for (const child of children) {
    if (child.snapshot.data['breadCrump']) {
      this.breadcrumpService.setData(child.snapshot.data['breadCrump'])
    } else {
      this.breadcrumpService.setData(null)
    }
    return this.createBreadcrumbs(child);
  }
}
}
