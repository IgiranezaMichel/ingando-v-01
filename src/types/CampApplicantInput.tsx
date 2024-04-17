import {CampApplicantStatus} from '../enum/campApplicationStatus';

export type CampApplicantInput = {
  id: string;
  campId: string;
  accountHolderId: string;
  campApplicantStatus: CampApplicantStatus;
  paymentCode: string;
  telephone: string;
  comment: string;
};
