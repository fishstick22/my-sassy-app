import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-tplcontent',
  templateUrl: './popover-tplcontent.component.html',
  styleUrls: ['./popover-tplcontent.component.scss']
})
export class PopoverTplcontentComponent implements OnInit {

  name = 'World';

  constructor() { }

  ngOnInit() {
  }

}
