import Map "mo:core/Map";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize access control state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type LeadId = Nat;
  type Timestamp = Int;

  public type LeadSubmission = {
    name : Text;
    contactInfo : Text;
    serviceInterested : Text;
    message : Text;
    timestamp : Timestamp;
  };

  module LeadSubmission {
    public func isValid(lead : LeadSubmission) : Bool {
      // Add basic validation logic if required here (e.g. non-empty fields)
      lead.name.size() > 0 and lead.contactInfo.size() > 0 and lead.serviceInterested.size() > 0 and lead.message.size() > 0;
    };
  };

  var nextLeadId : LeadId = 0;
  let leads = Map.empty<LeadId, LeadSubmission>();

  public shared ({ caller }) func submitLead(name : Text, contactInfo : Text, serviceInterested : Text, message : Text) : async () {
    // No authorization check - public contact form accessible to everyone including guests
    let newLead : LeadSubmission = {
      name;
      contactInfo;
      serviceInterested;
      message;
      timestamp = Time.now();
    };

    if (not LeadSubmission.isValid(newLead)) {
      Runtime.trap("Invalid lead: All fields must be non-empty");
    };

    leads.add(nextLeadId, newLead);
    nextLeadId += 1;
  };

  public query ({ caller }) func getAllLeads() : async [LeadSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can retrieve leads");
    };
    leads.values().toArray();
  };
};
