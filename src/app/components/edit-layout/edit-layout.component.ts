import { Component, OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TestComponentComponent } from '../test-component/test-component.component';
import { CompanyDefinition } from '../../models/layout-company';
import { LayoutDefinition, RowDefinition, ColumnDefinition, FieldDefinition } from '../../models/layout-definition';
 
@Component({
  selector: 'app-edit-layout',
  templateUrl: './edit-layout.component.html',
  styleUrls: ['./edit-layout.component.scss']
})
export class EditLayoutComponent implements OnInit {

  hide: boolean = true;
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  layoutDefinition: LayoutDefinition = CompanyDefinition.mapViewDefinitionToLayoutDefinition();

  /*{ rows : [{
      columns: [{
          size: "6",
          fields : [{
                  size: "6",
                  name: "test1",
                  caption: "test 1",
                  component: TestComponentComponent
              }, {
                  size: "6",
                  name: "test2",
                  caption: "test 2",
                  component: Test2ComponentComponent
              },
              {
                size: "6",
                name: "test3",
                caption: "test 3",
                component: TestComponentComponent
            },{
              size: "6",
              name: "test4",
              caption: "test 4",
              component: TestComponentComponent
          }, {
              size: "6",
              name: "test5",
              caption: "test 5",
              component: Test2ComponentComponent
          },
          {
            size: "6",
            name: "test6",
            caption: "test 6",
            component: TestComponentComponent
        }
          ]
      }]
  }]};*/

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {

    let indexs = event.container.id.split('-');
    let i = indexs[0];
    let j = indexs[1];
    let data: FieldDefinition[] = this.layoutDefinition.rows[i].columns[j].fields;
    if (event.previousContainer === event.container) {
      moveItemInArray(data, event.previousIndex, event.currentIndex);
    } else {
      let indexsPreviousContainer = event.previousContainer.id.split('-');
      let iPreviousContainer = indexsPreviousContainer[0];
      let jPreviousContainer = indexsPreviousContainer[1];
      let dataPreviousContainer: FieldDefinition[] = this.layoutDefinition.rows[iPreviousContainer].columns[jPreviousContainer].fields;

      transferArrayItem(dataPreviousContainer,
                        data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  print() {
    this.printViewDefinition = CompanyDefinition.mapLayoutDefinitionToViewDefinition(this.layoutDefinition);
  }

  copyInputMessage(div) {
    div.select();
    document.execCommand('copy');
    div.setSelectionRange(0, 0);
  }

  private printViewDefinition;

  getValidLists(row:RowDefinition, i:number, column:ColumnDefinition, j:number) {
    return ['0-0', '0-1'];
  }
}
