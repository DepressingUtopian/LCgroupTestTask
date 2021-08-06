import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {

  @Input() header: string = "";
  @Output() onClick = new EventEmitter<{ offsetLeft: number }>();

  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActive = (event: MouseEvent) => {
    let target = event.target as HTMLElement;
    console.log(target.className);
    if (target.className !== "filter-button" && target.parentElement) {
      target = target.parentElement;
    }

    this.isActive = !this.isActive;
    this.onClick.emit({ offsetLeft: target.offsetLeft });
  }
}
