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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { OrderComponent } from './Order/Order.component';
import { VehicleComponent } from './Vehicle/Vehicle.component';

import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
import { PrivateOwnerComponent } from './PrivateOwner/PrivateOwner.component';
import { CompanyComponent } from './Company/Company.component';
import { RegulatorComponent } from './Regulator/Regulator.component';
import { AuctionHouseComponent } from './AuctionHouse/AuctionHouse.component';
import { ScrapMerchantComponent } from './ScrapMerchant/ScrapMerchant.component';

import { PlaceOrderComponent } from './PlaceOrder/PlaceOrder.component';
import { UpdateOrderStatusComponent } from './UpdateOrderStatus/UpdateOrderStatus.component';
import { ApplicationForVehicleRegistrationCertificateComponent } from './ApplicationForVehicleRegistrationCertificate/ApplicationForVehicleRegistrationCertificate.component';
import { PrivateVehicleTransferComponent } from './PrivateVehicleTransfer/PrivateVehicleTransfer.component';
import { ScrapVehicleComponent } from './ScrapVehicle/ScrapVehicle.component';
import { UpdateSuspiciousComponent } from './UpdateSuspicious/UpdateSuspicious.component';
import { ScrapAllVehiclesByColourComponent } from './ScrapAllVehiclesByColour/ScrapAllVehiclesByColour.component';
import { SetupDemoComponent } from './SetupDemo/SetupDemo.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    VehicleComponent,
    ManufacturerComponent,
    PrivateOwnerComponent,
    CompanyComponent,
    RegulatorComponent,
    AuctionHouseComponent,
    ScrapMerchantComponent,
    PlaceOrderComponent,
    UpdateOrderStatusComponent,
    ApplicationForVehicleRegistrationCertificateComponent,
    PrivateVehicleTransferComponent,
    ScrapVehicleComponent,
    UpdateSuspiciousComponent,
    ScrapAllVehiclesByColourComponent,
    SetupDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
