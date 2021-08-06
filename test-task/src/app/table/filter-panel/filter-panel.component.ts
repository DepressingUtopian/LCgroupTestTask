import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit, OnChanges {

  @Input() public filtersData: { header: string, options: { key: string, value: string }[] }[] = [];
  public headers: string[] = [];
  public options: { key: string, value: string }[] = [];
  public isShowTooltip: boolean = false;
  public tooltipLeftOffset: number = 0;

  @ViewChild("tooltip", {static: false})
  tooltipRef: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.headers = this.filtersData.map(elem => elem.header);
  }

  public showTooltip = ({ offsetLeft }:{offsetLeft: number}) => {
    this.isShowTooltip = !this.isShowTooltip
    const tooltipWidth = this.tooltipRef?.nativeElement?.width;
    console.log(this.tooltipRef);
    this.tooltipLeftOffset = offsetLeft + (tooltipWidth ? tooltipWidth / 2 : 0);
    console.log(this.tooltipLeftOffset);
    console.log(this.isShowTooltip);
  }

}
