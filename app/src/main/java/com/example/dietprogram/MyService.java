package com.example.dietprogram;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Handler;
import android.os.IBinder;
import android.util.Log;
import android.widget.Toast;



public class MyService extends Service {
    private static final String TAG = "myService";
    String warning=((today_goal)today_goal.warnMsg).warningMSG;
    MediaPlayer insult;



    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        //insult라는 음악 플레이어 목표 달성도에 따라 생성
        Log.d(TAG, "onCreate()");
        if(warning=="니가 그렇지 뭐"){
            insult=MediaPlayer.create(this,R.raw.loser);
        }
        else if(warning=="돼지"){
            insult=MediaPlayer.create(this,R.raw.pig);

        }
        else if(warning=="의지박약"){
            insult=MediaPlayer.create(this,R.raw.no_reliabillity);
        }
        else{
            insult=MediaPlayer.create(this,R.raw.good_job);
        }
        insult.setLooping(true);

    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        //음악을 시작하고 ToastMsg출력
        insult.start();
        Toast.makeText(MyService.this, warning, Toast.LENGTH_LONG).show();
        return super.onStartCommand(intent, flags, startId);


    }

    @Override
    public void onDestroy() {
        Log.d(TAG, "onDestroy()");

        insult.stop();
        super.onDestroy();
    }


}


