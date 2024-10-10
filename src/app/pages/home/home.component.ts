import { Component, OnInit, inject } from '@angular/core';
import { TrainService } from '../../service/train.service';
import { IStation } from '../../model/train';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponentn implements OnInit {
  trainService = inject(TrainService);
  stationList: IStation[] = [];
  fromStationId: number = 0;
  toStationId: number = 0;
  dateOfTravel: string = '';
  router = inject(Router);
  ngOnInit(): void {
    this.loadAllStattion();
  }

  loadAllStattion() {
    this.trainService.getAllStaions().subscribe((res: any) => {
      this.stationList = res.data;
    });
  }
  onSearch() {
    if (
      this.fromStationId == 0 ||
      this.toStationId == 0 ||
      this.dateOfTravel == ''
    ) {
      alert('select yout journey details');
    } else {
      if (this.fromStationId == this.toStationId) {
        alert("form n to station can't be same");
      } else {
        this.router.navigate([
          '/search',
          this.fromStationId,
          this.toStationId,
          this.dateOfTravel,
        ]);
      }
    }
  }
}
