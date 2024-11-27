import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,FormsModule, InputTextModule, FloatLabelModule,ButtonModule,DividerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name ='';
  email='';

  emailChange(e :Event){
    // @ts-ignore
    this.email = e.target?.value;
  }

  nameChange(e :Event){
   // @ts-ignore
   this.name = e.target?.value;
  }

  fatheraddSubName(str:string){
     this.name +=str;
  }
}
