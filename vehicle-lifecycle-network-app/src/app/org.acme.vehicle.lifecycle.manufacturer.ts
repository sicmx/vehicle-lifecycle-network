import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {VehicleDetails} from './org.vda';
import {Manager, Business} from './composer.business';
import {Address,Person} from './composer.base';
// export namespace org.acme.vehicle.lifecycle.manufacturer{
   export enum OrderStatus {
      PLACED,
      SCHEDULED_FOR_MANUFACTURE,
      VIN_ASSIGNED,
      OWNER_ASSIGNED,
      DELIVERED,
   }
   export class Manufacturer extends Business {
      companyId: string;
   }
   export class Order extends Asset {
      orderId: string;
      vehicleDetails: VehicleDetails;
      orderStatus: OrderStatus;
      manufacturer: Manufacturer;
      orderer: Person;
      statusUpdates: UpdateOrderStatus[];
   }
   export class PlaceOrder extends Transaction {
      orderId: string;
      vehicleDetails: VehicleDetails;
      manufacturer: Manufacturer;
      orderer: Person;
   }
   export class PlaceOrderEvent extends Event {
      orderId: string;
      vehicleDetails: VehicleDetails;
   }
   export class UpdateOrderStatus extends Transaction {
      orderStatus: OrderStatus;
      vin: string;
      v5c: string;
      numberPlate: string;
      order: Order;
   }
   export class UpdateOrderStatusEvent extends Event {
      orderStatus: OrderStatus;
      order: Order;
   }
// }
