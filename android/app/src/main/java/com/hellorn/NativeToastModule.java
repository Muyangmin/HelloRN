package com.hellorn;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * This class shows a basic toast module.
 * Created by muyangmin on May 26, 2017.
 */
public class NativeToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT = "SHORT";
    private static final String DURATION_LONG = "LONG";

    public NativeToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * 这个name是在JS中注册的module name， 不能与现有的库存在冲突，否则会出错
     * NOTE: 模块名前的RCT前缀会被自动移除。所以如果返回的字符串为"RCTToastAndroid"，
     * 在JavaScript端依然可以通过React.NativeModules.ToastAndroid访问到这个模块。
     */
    @Override
    public String getName() {
        //这里不一定要与java类名相同
        return "NativeToast";
    }

    /**
     * 该方法返回的常量map会被导出到JS。这个map不一定需要实现--它是nullable的。
     * <p>
     * 注意导出的是key值，不是key的变量名。在这里导出的常量即为"SHORT"和"LONG";
     */
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> map = new HashMap<>();
        map.put(DURATION_LONG, Toast.LENGTH_LONG);
        map.put(DURATION_SHORT, Toast.LENGTH_SHORT);
        return map;
    }

    /**
     * 要导出一个方法给JavaScript使用，Java方法需要使用注解@ReactMethod。方法的返回类型必须为void。
     * React Native的跨语言访问是异步进行的，所以想要给JavaScript返回一个值的唯一办法是使用回调函数或者发送事件.
     */
    @ReactMethod
    @SuppressWarnings("unused")
    public void show(String msg, int duration) {
        Log.i(getClass().getSimpleName(),
                String.format(Locale.US, "native show() method is calling with param[%s, %d]",
                        msg, duration));
        Toast.makeText(getReactApplicationContext(), msg, duration).show();
    }
}
