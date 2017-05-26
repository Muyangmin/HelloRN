/**
 * 为了让你的功能从JavaScript端访问起来更为方便，通常我们都会把原生模块封装成一个JavaScript模块。
 * 这不是必须的，但省下了每次都从NativeModules中获取对应模块的步骤。
 * 这个JS文件也可以用于添加一些其他JavaScript端实现的功能。
 *
 * Sample usage:
 * NativeToast.show(msg, [SHORT|LONG]);
 * Created by muyangmin on 5/26/17.
 */

import {
    NativeModules,
} from 'react-native';

export default NativeModules.NativeToast;