import { Component, OnInit, Input,Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-ghe",
  templateUrl: "./item-ghe.component.html",
  styleUrls: ["./item-ghe.component.scss"]
})
export class ItemGheComponent implements OnInit {
  @Input() ghe ;
  trangThaiChon: boolean =false;
  @Output() eventChoose = new EventEmitter();
  

  constructor() {}

  ngOnInit() {}

  chonGhe() {
    this.trangThaiChon = !this.trangThaiChon;
    this.eventChoose.emit({ghe: this.ghe,trangThaiChon: this.trangThaiChon });
  }
}
