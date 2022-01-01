import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SignatureModel, StartMeeingModel, ZoomClientModel } from '../model/zoom/zoom.model';
import { ZoomService } from '../http-services/zoom-services/zoom.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'kykz-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {
  startMeetingForm!: FormGroup;
  subcription: Subscription;
  constructor(
    private zoomService: ZoomService, 
    private fb: FormBuilder) {
    this.subcription = new Subscription();
  }

  ngOnInit(): void {
    this.initForm();

  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  onSubmit() {

    if (this.startMeetingForm.valid) {
      let formValues: StartMeeingModel = this.startMeetingForm.value;
      let signaturePaylod: SignatureModel = {
        meetingNumber: formValues.meetingNumber,
        apiKey: environment.apiKey,
        apiSecret: environment.apiSecret,
        role: '0'
      };
      this.subcription.add(this.zoomService.genrateSignature(signaturePaylod).subscribe((signature: string) => {
        this.handleGenrateSignature(signature, formValues);
      })
      )
    }
  }
  private handleGenrateSignature(signature: string, formValues: StartMeeingModel) {
    let meetingPayloads: ZoomClientModel = {
      meetingNumber: formValues.meetingNumber.replace(/\s/g, ""),
      passWord: formValues.passWord,
      signature: signature,
      userEmail: formValues.userEmail,
      userName: formValues.userName
    };
    document.getElementById('zmmtg-root')!.style.display = 'block'
    this.zoomService.initializeWebSDK(meetingPayloads);
  }
  private initForm() {
    this.startMeetingForm = this.fb.group({
      meetingNumber: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
      userEmail: ['', [Validators.required]]
    });
  }
}
