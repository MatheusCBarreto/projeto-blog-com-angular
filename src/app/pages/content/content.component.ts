import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = "";

  @Input()
  contentTitle:string = "";

  @Input()
  contentDescription:string = "";

  @Input()
  private id:string | null = "0";

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get('id')  
    );
    this.setValueToComponent(this.id);
  }
  
  setValueToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0];
    console.log(result);
    
    this.contentTitle = result.title;
    this.photoCover = result.photo;
    this.contentDescription = result.description;
  
  }
}
