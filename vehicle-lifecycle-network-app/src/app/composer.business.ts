import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Address,Gender,ContactDetails,BirthDetails,DeathDetails, Person} from './composer.base';
// export namespace composer.business{
   export abstract class Business extends Participant {
      headquarters: Address;
      name: string;
      managers: Manager[];
   }
   export abstract class Employee extends Person {
      employer: Business;
      manager: Manager;
      startDate: Date;
      employmentStatus: string;
      department: string;
      jobRole: string;
   }
   export abstract class Manager extends Employee {
      directReports: Employee[];
   }
// }
