import { Component, OnInit, ViewChild} from '@angular/core';
import { DeadlybeatCovid19Service } from '../deadlybeat-covid19.service';
import { countryReports } from 'src/countryReports';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  ELEMENT_DATA:countryReports[];

  //same as in matColumnDef property
  displayedColumns: string[] = ['country','cases', 'todayCases', 'deaths','todayDeaths', 'recovered',
   'active', 'critical','casesPerOneMillion', 'deathsPerOneMillion', 'tests', 'testsPerOneMillion'];

  dataSource = new MatTableDataSource<countryReports>(this.ELEMENT_DATA);

  //for Pagination
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  //for sorting
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service:DeadlybeatCovid19Service) { }

  ngOnInit(): void {
    //for pagination
    this.dataSource.paginator = this.paginator;

  //for Sorting
    this.dataSource.sort=this.sort;

    //onload get all reports data in table
    this.getAllReports();
  }

  public getAllReports(){
    let resp=this.service.covid19Reports();
    resp.subscribe(reports=>this.dataSource.data=reports as countryReports[]); //show report as array of country report
  }

  //method for filter feature
  applyFilter(filterValue: string) {
    // const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}
