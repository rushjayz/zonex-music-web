import {DeviceVariables} from './variables';

export const Device = {
<<<<<<< HEAD
    mobile: `(max-width: ${DeviceVariables.mobile})`,
=======
    mobile: `(min-width: ${DeviceVariables.mobile})`,
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
    tablet: `(min-width: ${DeviceVariables.tablet})`,
    desktop: `(min-width: ${DeviceVariables.desktop})`,
};

export const Animations = {
    zoom_in: 'scale(1.1, 1.1)',
    zoom_in__default: 'scale(1, 1)',
    transition__default: 'all 0.25s ease-in',
    transition__type_one: 'all 0.35s ease-in-out 0s',
};
