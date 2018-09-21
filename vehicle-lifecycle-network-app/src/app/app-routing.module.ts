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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Order', component: OrderComponent },
  { path: 'Vehicle', component: VehicleComponent },
  { path: 'Manufacturer', component: ManufacturerComponent },
  { path: 'PrivateOwner', component: PrivateOwnerComponent },
  { path: 'Company', component: CompanyComponent },
  { path: 'Regulator', component: RegulatorComponent },
  { path: 'AuctionHouse', component: AuctionHouseComponent },
  { path: 'ScrapMerchant', component: ScrapMerchantComponent },
  { path: 'PlaceOrder', component: PlaceOrderComponent },
  { path: 'UpdateOrderStatus', component: UpdateOrderStatusComponent },
  { path: 'ApplicationForVehicleRegistrationCertificate', component: ApplicationForVehicleRegistrationCertificateComponent },
  { path: 'PrivateVehicleTransfer', component: PrivateVehicleTransferComponent },
  { path: 'ScrapVehicle', component: ScrapVehicleComponent },
  { path: 'UpdateSuspicious', component: UpdateSuspiciousComponent },
  { path: 'ScrapAllVehiclesByColour', component: ScrapAllVehiclesByColourComponent },
  { path: 'SetupDemo', component: SetupDemoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
