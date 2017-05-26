package com.hellorn;

import android.graphics.Color;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * 自定义ViewManager，与原生模块类似，负责注册控件到JS并充当方法调用的桥梁。
 * Created by muyangmin on May 26, 2017.
 */
public class CustomImageVM extends SimpleViewManager<CustomImageView> {
    /**
     * getName方法返回的名字会用于在JavaScript端引用这个原生视图类型。
     */
    @NonNull
    @Override
    public String getName() {
        return "CustomImageView";
    }

    /**
     * 视图在createViewInstance中创建，且应当把自己初始化为默认的状态。所有属性的设置都通过后续的updateView来进行。
     */
    @NonNull
    @Override
    protected CustomImageView createViewInstance(ThemedReactContext reactContext) {
        return new CustomImageView(reactContext);
    }

    /**
     * 方法参数第一个为view控件， 第二个为要操作的属性.
     * @ReactProp中的name标记位JS文件中使用的属性名，支持基本类型和String等，并可接受defaultFloat/Int/Boolean。
     */
    @ReactProp(name = "background")
    public void setBackground(CustomImageView view, @Nullable String color) {
        view.setBackgroundColor(Color.parseColor(color));
    }


    @ReactProp(name = "alpha", defaultFloat = 0.5f)
    public void setAlpha(CustomImageView view, float alpha) {
        view.setAlpha(alpha);
    }
}
