import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomPipePipe } from './custom-pipe.pipe';
import { FormsModule, NgModel } from '@angular/forms';
import { MyServiceService } from './my-service.service';
import { DatePipe, UpperCasePipe } from '@angular/common';



@Component({
  selector: 'app-root', //name of the component which you use in html for accessing this compoent
  standalone: true,
  imports: [CustomPipePipe,DatePipe,UpperCasePipe,RouterOutlet,RouterLink], // TempleteCompoenet is which compoenent which we are using in this app compenet so you need to import it
  templateUrl: './app.component.html', // templete url is where html file is defined
  styleUrl: './app.component.scss' // styleUrl here css file is defined.
})
export class AppComponent {
  currentDate: Date = new Date();
  constructor(public myService : MyServiceService){
    const data  = this.myService.getData()
  }
condition:boolean = true
   changeState=()=>{
    this.condition = !this.condition
   }
    
}
