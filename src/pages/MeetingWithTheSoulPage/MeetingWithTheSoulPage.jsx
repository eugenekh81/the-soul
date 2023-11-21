import './MeetingWithTheSoulPage.scss';
import { MeetingWithTheSoulBanner } from '../../components/MeetingWithTheSoulBanner/MeetingWithTheSoulBanner';
import { Partners } from '../../components/Partners/Partners';
import { MeetingWIthTheSoulContent } from '../../MeetingWithTheSoulContent/MeetingWIthTheSoulContent';

export const MeetingWithTheSoulPage = () => {
  return (
    <>
      <MeetingWithTheSoulBanner />

      <MeetingWIthTheSoulContent />

      <Partners />
    </>
  );
};
