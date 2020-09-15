import { Component, OnInit } from '@angular/core';
import { RestTableService } from 'src/app/services/restTable/rest-table.service';
import { Observable } from 'rxjs';
import { JsonpClientBackend } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tables = [];
  task = [];

  constructor(private restTable: RestTableService) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables(){
    this.restTable.getTables().subscribe(res =>{
      this.tables = res.table;
      
      // this.task = this.tables.map( ({task}) => task) 
     this.task = res.table.map( ({task}) => task)
      this.task = this.task.map( (state) => 
         state.forEach(({comment, subElements}) => {
            console.log(comment, subElements)
            return comment 
        }))
      //console.log( this.tables)
      // let pgro = [...this.task];
      console.log( this.tables )
      console.log( this.task )
    }); 
  }

}
