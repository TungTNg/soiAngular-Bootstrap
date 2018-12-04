import { Component, OnInit } from '@angular/core';
import { SoiDataService } from '../soi-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  soiData: Object;
  
  constructor(private data: SoiDataService) { }

  ngOnInit() {
    this.data.getData().subscribe(data => {
        this.soiData = data;
      }
    );
  }
  
  reLoadData(date) {
    this.data.getData(date).subscribe(data => {
      this.soiData = data;
      }
    );
  }

}
