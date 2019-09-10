import { Component, OnInit, Input, ViewChild, OnDestroy,  ComponentFactoryResolver } from '@angular/core';

import { DynamicComponentDirective } from '../../directives/dynamic-component.directive';
import { FieldDefinition } from '../../models/layout-definition';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponent implements OnInit, OnDestroy {
  @Input() field: FieldDefinition;

  currentAdIndex = -1;
  @ViewChild(DynamicComponentDirective, {static: true}) adHost: DynamicComponentDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.field.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = <any>viewContainerRef.createComponent(componentFactory);

    try {
      componentRef.instance.field = this.field;
    }
    catch(e) {
      console.log(e);
    }
  }
}