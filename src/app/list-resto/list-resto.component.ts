import { Component, OnInit } from '@angular/core';
import { RestoService } from '../service/resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  collection: any[] = [];

  constructor(private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((result: any) => {
      this.collection = result;
    })
  }

  deleteResto(id: any) {
    if (confirm("Do you really want to delete?")) {
      this.collection.splice(id-1, 1)
      this.resto.deleteResto(id).subscribe((result: any) => {
        console.warn("result", result)
      })
    }


  }







}
