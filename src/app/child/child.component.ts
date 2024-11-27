import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentname = '';

  @Output() addSubName = new EventEmitter();

  clickFunction(){
    this.addSubName.emit(' 精誠人');
  }
  

}
