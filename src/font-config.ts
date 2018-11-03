import {library} from '@fortawesome/fontawesome-svg-core';
import * as allIcons from '@fortawesome/free-solid-svg-icons';

const iconsSet = [
  allIcons.faCoffee,
  allIcons.faClock,
  allIcons.faMapMarker,
];

export const configFont = () => {
  iconsSet.forEach(i => library.add(i));
};
