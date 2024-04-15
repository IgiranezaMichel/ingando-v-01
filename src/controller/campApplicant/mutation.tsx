import {useMutation} from '@apollo/client';
import {CREATE_CAMP_APPLICATION} from '../../graphql/campApplicant/mutation';
import {CampApplicantInput} from '../../types/CampApplicantInput';

export const useCampApplication = (campApplicantInput: CampApplicantInput) => {
  const [save] = useMutation(CREATE_CAMP_APPLICATION);
  const saveCampApplication = async () => {
    return await save({variables: {campApplicantInput: campApplicantInput}});
  };
  return {saveCampApplication};
};
