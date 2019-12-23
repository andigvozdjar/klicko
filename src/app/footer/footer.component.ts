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
  disabledSubmitButton: boolean = true;
  displayFormError: boolean = false;
  loadingForm: boolean =false
  displayForm: boolean = true;

  constructor(private fb: FormBuilder, private seoMail: SeoMailService) {

    this.contactForm = fb.group({
      'name': ['', Validators.required],
      'phone': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'desc': [''],
    });
   }
  
  ngOnInit() {
  }
  onSubmitFooter() {
    if(this.contactForm.valid){
      this.seoMail.sendMessage(this.contactForm.value).subscribe( data=>
      {
        console.log(data)
        this.contactForm.reset();
        this.disabledSubmitButton = true;
        this.displayForm = false;
        this.loadingForm = false;
      }, 
      error => {
        console.log('Error', error);
        this.displayFormError = true;
        this.displayForm = false;
        this.loadingForm = false;
      });
    }else{
      console.log('form not valid');
    }
  }

}
