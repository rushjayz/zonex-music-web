import {DeviceVariables} from './variables';

export const Device = {
    mobile: `(max-width: ${DeviceVariables.mobile})`,
    tablet: `(min-width: ${DeviceVariables.tablet})`,
    desktop: `(min-width: ${DeviceVariables.desktop})`,
};

export const Animations = {
    zoom_in: 'scale(1.1, 1.1)',
    zoom_in__default: 'scale(1, 1)',
    transition__default: 'all 0.25s ease-in',
    transition__type_one: 'all 0.35s ease-in-out 0s',
};
