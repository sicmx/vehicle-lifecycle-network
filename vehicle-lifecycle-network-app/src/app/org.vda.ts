import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Person} from './composer.base';
// export namespace org.vda{
   export enum TaxClass {
      PRIVATE_LIGHT_GOODS,
      PETROL_CAR,
      DIESEL_CAR,
      ALTERNATIVE_FUEL_CAR,
      LIGHT_GOODS_VEHICLE,
      EURO4_LIGHT_GOODS_VEHICLE,
      EURO5_LIGHT_GOODS_VEHICLE,
      HEAVY_GOODS_VEHICLE,
      PRIVATE_HEAVY_GOODS_VEHICLE,
      SPECIAL_TYPES,
      HAULAGE_VEHICLES,
      BUS,
      MOTORCYCLE,
      ELECTRIC_MOTOCYCLE,
      SPECIAL_VEHICLES,
      SMALL_ISLAND_VEHICLES,
      RECOVERY_VEHICLE,
      SPECIAL_CONCESSIONARY,
      EMERGENCY_VEHICLE,
      EXCEMPT_VEHICLE,
   }
   export class VehicleDetails {
      make: string;
      modelType: string;
      colour: string;
      vin: string;
      v5c: string;
      numberPlate: string;
      modelVariant: string;
      modelVersion: string;
      bodyType: string;
      taxationClass: TaxClass;
      revenueWeight: number;
      cylinderCapacity: number;
      co2: number;
      typeOfFuel: string;
      numberOfSeats: number;
      numberOfStandingPlaces: number;
      wheelPlan: string;
      vehicleCategory: string;
      typeApprovalNumber: string;
      maxNetPower: number;
      engineNumber: string;
      maxPermissibleMass: number;
      massInService: number;
      powerWeightRatio: number;
      trailerDetails: TrailerDetails;
      soundDetails: SoundDetails;
      exhaustEmissions: ExhaustEmissions;
   }
   export class TrailerDetails {
      maxPermissibleTowableMassBraked: number;
      maxPermissibleTowableMassUnbraked: number;
   }
   export class SoundDetails {
      stationary: number;
      engineSpeed: number;
      driveBy: number;
   }
   export class ExhaustEmissions {
      co: number;
      hc: number;
      nox: number;
      hc_plus_nox: number;
      particulates: number;
   }
   export class VehicleTransferLogEntry {
      vehicle: Vehicle;
      buyer: Person;
      seller: Person;
      timestamp: Date;
   }
   export class ApplicationForVehicleRegistrationCertificate extends Transaction {
      vehicleDetails: VehicleDetails;
      keeper: Person;
      dvlaFleetNumber: string;
      driversLicenseNumber: string;
      mileage: number;
      previousPostCode: string;
   }
   export abstract class VehicleTransaction extends Transaction {
      vehicle: Vehicle;
   }
   export class PrivateVehicleTransfer extends VehicleTransaction {
      seller: Person;
      buyer: Person;
      specialNotes: string;
   }
   export enum VehicleStatus {
      ACTIVE,
      OFF_THE_ROAD,
      SCRAPPED,
   }
   export class Vehicle extends Asset {
      vin: string;
      vehicleDetails: VehicleDetails;
      vehicleStatus: VehicleStatus;
      owner: Person;
      numberPlate: string;
      suspiciousMessage: string;
      logEntries: VehicleTransferLogEntry[];
   }
   export class ScrapVehicle extends VehicleTransaction {
      logEntries: VehicleTransaction[];
   }
   export class UpdateSuspicious extends VehicleTransaction {
      message: string;
   }
   export class ScrapAllVehiclesByColour extends Transaction {
      colour: string;
   }
   export class ScrapVehicleEvent extends Event {
      vehicle: Vehicle;
   }
// }
