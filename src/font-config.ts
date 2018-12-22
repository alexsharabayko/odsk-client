import {library} from '@fortawesome/fontawesome-svg-core';
import * as allIcons from '@fortawesome/free-solid-svg-icons';
import * as brandsIcons from '@fortawesome/fontawesome-free-brands';

const iconsSet = [
  allIcons.faCoffee,
  allIcons.faClock,
  allIcons.faMapMarker,
  allIcons.faPhone,
  allIcons.faEnvelope,
  brandsIcons.faSkype,
];

export const configFont = () => {
  iconsSet.forEach(i => library.add(i as any));
};
