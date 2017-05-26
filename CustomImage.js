/**
 * Created by muyangmin on 5/26/17.
 */

import {PropTypes} from 'react';
import {
    requireNativeComponent,
    View,
} from 'react-native';

const iface = {
    name: 'CustomImageView',
    propTypes: {
        background: PropTypes.string,
        alpha: PropTypes.number,
        ...View.propTypes // 包含默认的View的属性
    },
};

//和原生模块不同，原生视图的前缀RCT不会被自动去掉。
module.exports = requireNativeComponent('CustomImageView', iface);