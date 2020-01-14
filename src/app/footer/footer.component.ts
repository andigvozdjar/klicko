import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoMailService } from '../shared/seoMail.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = false;
  displayFormError: boolean = false;
  loadingForm: boolean =false;
  successSend: boolean = false;
  displayForm: boolean = true;

  constructor(private fb: FormBuilder, private seoMail: SeoMailService) {

    this.contactForm = fb.group({
      'name': ['', Validators.required],
      'phone': [''],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'desc': ['', Validators.required],
    });
   }
  
  ngOnInit() {
  }
  onSubmitFooter() {
    this.loadingForm = true;
    if(this.contactForm.valid){
      this.seoMail.sendMessage(this.contactForm.value).subscribe( data=>
      {
        console.log(data);
        this.loadingForm = false;
        this.contactForm.reset();
        this.disabledSubmitButton = true;
        this.successSend = true;
        
      }, 
      error => {
        this.loadingForm = false;
        console.log('Error', error);
        this.displayFormError = true;
      });
    }else{
      console.log('form not valid');
    }
  }
  resetFormAndVal(){
    this.contactForm.reset();
    this.loadingForm = true;
    this.loadingForm = false;
    this.displayFormError = false;
  }

}
