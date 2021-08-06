import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() formOptions: {key : string, value : string}[] | null = null;
  @Input() formHeader: string = "";
  @Input() tooltipLeftOffset = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
