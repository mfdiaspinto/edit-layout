import { Component, OnInit, Input } from '@angular/core';
import { FieldDefinition } from '../../models/layout-definition';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  @Input()
  public field: FieldDefinition;

  constructor() { }
  
  ngOnInit() {
  }

}
