import { Component, OnInit } from '@angular/core';
import {SearchJsonService} from "../search-json.service";
import { ExcelServicesService } from '../services/excel-services.service';
@Component({
  selector: 'app-data-search',
  templateUrl: './data-search.component.html',
  styleUrls: ['./data-search.component.scss']
})
export class DataSearchComponent implements OnInit {
  name = "Angular";

searchData:any;
lead=[];
followers=[];
columnName=[];
rowData=[];
excel=[];
defaultDisplayNumber=10;
  constructor(private excelService: ExcelServicesService, private service: SearchJsonService) {
    this.service.getJson().subscribe(
      (data)=>{
      this.searchData=data;
      console.log(this.searchData.rows.length/this.defaultDisplayNumber);
     // console.log(this.searchData);
      this.searchData.columns.forEach(element => {
        this.columnName.push(element.name);
      });
      this.searchData.rows.forEach(element => {
        this.rowData.push(element);
        this.excel.push(element);
      });
      console.log(this.rowData);
      }
    );
   }

  ngOnInit() {

    // console.log(this.searchData);
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.excel, 'sample');
 }

}
