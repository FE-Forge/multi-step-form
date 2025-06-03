import { EnrollProfileProvider } from '../model/enroll-profile.context';
import { EnrollProfileView } from './EnrollProfileView';

export function EnrollProfilePage() {
  return (
    <EnrollProfileProvider>
      <EnrollProfileView />
    </EnrollProfileProvider>
  );
}
