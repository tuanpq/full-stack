package vn.com.ds.erp;

import android.app.Application;

import com.androidnetworking.AndroidNetworking;

public class ERPApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        AndroidNetworking.initialize(getApplicationContext());
    }

}
