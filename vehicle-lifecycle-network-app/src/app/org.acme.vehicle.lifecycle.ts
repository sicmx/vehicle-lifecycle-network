import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Gender,ContactDetails,BirthDetails,DeathDetails,Address, Person} from './composer.base';
import {Manager, Business} from './composer.business';
// export namespace org.acme.vehicle.lifecycle{
   export class PrivateOwner extends Person {
      email: string;
   }
   export class Company extends Business {
      companyId: string;
   }
   export class Regulator extends Company {
   }
   export class AuctionHouse extends Company {
   }
   export class ScrapMerchant extends Company {
   }
   export class SetupDemo extends Transaction {
   }
// }
