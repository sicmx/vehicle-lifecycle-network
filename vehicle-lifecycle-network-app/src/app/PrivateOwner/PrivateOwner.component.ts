import { Address } from './../composer.base';
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PrivateOwnerService } from './PrivateOwner.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-privateowner',
  templateUrl: './PrivateOwner.component.html',
  styleUrls: ['./PrivateOwner.component.css'],
  providers: [PrivateOwnerService]
})
export class PrivateOwnerComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
  private errorMessage;

  email = new FormControl('', Validators.required);
  title = new FormControl('', Validators.required);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  middleNames = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  nationalities = new FormControl('', Validators.required);
  mobilePhone = new FormControl('', Validators.required);
  homePhone = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  dateofBirth = new FormControl('', Validators.required);
  placeofBirth = new FormControl('', Validators.required);
  dateofDeath = new FormControl('', Validators.required);
  placeofDeath = new FormControl('', Validators.required);


  constructor(public servicePrivateOwner: PrivateOwnerService, fb: FormBuilder) {
    this.myForm = fb.group({
      email: this.email,
      title: this.title,
      firstName: this.firstName,
      lastName: this.lastName,
      middleNames: this.middleNames,
      gender: this.gender,
      nationalities: this.nationalities,
      mobilePhone: this.mobilePhone,
      homePhone: this.homePhone,
      address: this.address,
      dateofBirth: this.dateofBirth,
      placeofBirth: this.placeofBirth,
      dateofDeath: this.dateofDeath,
      placeofDeath: this.placeofDeath
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.servicePrivateOwner.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org.acme.vehicle.lifecycle.PrivateOwner',
      'email': this.email.value,
      'title': this.title.value,
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'middleNames': this.middleNames.value,
      'gender': this.gender.value,
      'nationalities': this.nationalities.value,
      'mobilePhone': this.mobilePhone.value,
      'homePhone': this.homePhone.value,
      'address': this.address.value,
      'dateofBirth': this.dateofBirth.value,
      'placeofBirth': this.placeofBirth.value,
      'dateofDeath': this.dateofDeath.value,
      'placeofDeath': this.placeofDeath.value
    };

    this.myForm.setValue({
      'email': null,
      'title': null,
      'firstName': null,
      'lastName': null,
      'middleNames': null,
      'gender': null,
      'nationalities': null,
      'mobilePhone': null,
      'homePhone': null,
      'address': null,
      'placeofBirth': null,
      'dateofBirth': null,
      'placeofDeath': null,
      'dateofDeath': null
    });

    return this.servicePrivateOwner.addParticipant(this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'email': null,
        'title': null,
        'firstName': null,
        'lastName': null,
        'middleNames': null,
        'gender': null,
        'nationalities': null,
        'mobilePhone': null,
        'homePhone': null,
        'address': null,
        'placeofBirth': null,
        'dateofBirth': null,
        'placeofDeath': null,
        'dateofDeath': null
        });
      this.loadAll(); 
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org.acme.vehicle.lifecycle.PrivateOwner',
      'title': this.title.value,
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'middleNames': this.middleNames.value,
      'gender': this.gender.value,
      'nationalities': this.nationalities.value,
      'mobilePhone': this.mobilePhone.value,
      'homePhone': this.homePhone.value,
      'address': this.address.value,
      'placeofBirth': this.placeofBirth.value,
      'dateofBirth': this.dateofBirth.value,
      'placeofDeath': this.placeofDeath.value,
      'dateofDeath': this.dateofDeath.value
    };

    return this.servicePrivateOwner.updateParticipant(form.get('email').value, this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteParticipant(): Promise<any> {

    return this.servicePrivateOwner.deleteParticipant(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.servicePrivateOwner.getparticipant(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'email': null,
        'title': null,
        'firstName': null,
        'lastName': null,
        'middleNames': null,
        'gender': null,
        'nationalities': null,
        'mobilePhone': null,
        'homePhone': null,
        'address': null,
        'dateofBirth': null,
        'placeofBirth': null,
        'dateofDeath': null,
        'placeofDeath': null
      };

      if (result.email) {
        formObject.email = result.email;
      } else {
        formObject.email = null;
      }

      if (result.title) {
        formObject.title = result.title;
      } else {
        formObject.title = null;
      }

      if (result.firstName) {
        formObject.firstName = result.firstName;
      } else {
        formObject.firstName = null;
      }

      if (result.lastName) {
        formObject.lastName = result.lastName;
      } else {
        formObject.lastName = null;
      }

      if (result.middleNames) {
        formObject.middleNames = result.middleNames;
      } else {
        formObject.middleNames = null;
      }

      if (result.gender) {
        formObject.gender = result.gender;
      } else {
        formObject.gender = null;
      }

      if (result.nationalities) {
        formObject.nationalities = result.nationalities;
      } else {
        formObject.nationalities = null;
      }

      if (result.contactDetails.mobilePhone) {
        formObject.mobilePhone = result.contactDetails.mobilePhone;
      } else {
        formObject.mobilePhone = null;
      }

      if (result.contactDetails.homePhone) {
        formObject.homePhone = result.contactDetails.homePhone;
      } else {
        formObject.homePhone = null;
      }

      if (result.contactDetails.address) {
        formObject.address = result.contactDetails.address;
      } else {
        formObject.address = null;
      }

      if (result.birthDetails.dateOfBirth) {
        formObject.dateofBirth = result.birthDetails.dateOfBirth;
      } else {
        formObject.dateofBirth = null;
      }

      if (result.deathDetails.placeOfDeath) {
        formObject.placeofDeath = result.deathDetails.placeOfDeath;
      } else {
        formObject.placeofDeath = null;
      }

      if (result.deathDetails.dateOfDeath) {
        formObject.dateofDeath = result.deathDetails.dateOfDeath;
      } else {
        formObject.dateofDeath = null;
      }

      this.myForm.setValue(formObject);
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });

  }

  resetForm(): void {
    this.myForm.setValue({
      'email': null,
      'title': null,
      'firstName': null,
      'lastName': null,
      'middleNames': null,
      'gender': null,
      'nationalities': null,
      'mobilePhone': null,
      'homePhone': null,
      'address': null,
      'placeofBirth': null,
      'dateofBirth': null,
      'placeofDeath': null,
      'dateofDeath': null
  });
  }
}
