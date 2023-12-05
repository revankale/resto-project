import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../service/resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert: boolean = false;

  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private resto: RestoService) { }

  ngOnInit(): void {

  }

  collectResto() {
    this.resto.saveResto(this.addResto.value).subscribe((result: any) => {
      this.addResto.reset({});
    })
    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
  }


}
