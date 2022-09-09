import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-in-black-list',
  templateUrl: './food-in-black-list.component.html',
  styleUrls: ['./food-in-black-list.component.scss']
})
export class FoodInBlackListComponent implements OnInit, OnChanges {

  public foods = [] as any;
  public form!: FormGroup;
  isSubmited = false

  constructor(private foodService: FoodService, private formBuilder: FormBuilder) { }


  ngOnChanges() {
  }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe(data => this.foods = data);

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })

    

    setTimeout(() => {
      this.foodService.getFoods().subscribe(data => this.foods = data);
    }, 40000)
  }

  addUsers(data: any) {
    this.isSubmited = true;

    if (this.form.invalid) {
      return;
    }

    this.foodService.addFood(data).subscribe(data => {
      window.alert('Ushqimi u shtua me sukses');

      this.foodService.getFoods().subscribe(data => this.foods = data);
      this.form.reset();
    });
  }





}
