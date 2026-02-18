import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface LeadSubmission {
    contactInfo: string;
    serviceInterested: string;
    name: string;
    message: string;
    timestamp: Timestamp;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllLeads(): Promise<Array<LeadSubmission>>;
    getCallerUserRole(): Promise<UserRole>;
    isCallerAdmin(): Promise<boolean>;
    submitLead(name: string, contactInfo: string, serviceInterested: string, message: string): Promise<void>;
}
