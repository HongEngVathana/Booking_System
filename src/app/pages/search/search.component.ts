import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Search } from '../../model/train';
import { TrainService } from '../../service/train.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  trainerSearch = inject(TrainService);
  activateRoute = inject(ActivatedRoute);
  searchData: Search = new Search();
  constructor() {
    this.activateRoute.params.subscribe((res: any) => {
      debugger;
      this.searchData = res;
      this.getSearchTrain();
    });
  }
  getSearchTrain() {
    this.trainerSearch
      .getTrainsSearch(
        this.searchData.fromStationId,
        this.searchData.toStationId,
        this.searchData.dateOfTravel
      )
      .subscribe((res: any) => {
        debugger;
      });
  }
}
