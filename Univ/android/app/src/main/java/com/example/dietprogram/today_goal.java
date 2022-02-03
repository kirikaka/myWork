package com.example.dietprogram;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.provider.Telephony;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CalendarView;
import android.widget.CheckBox;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class today_goal extends AppCompatActivity  {
    public String warningMSG;
    String warning;

    public static Context warnMsg;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.today_goal);
        TextView infoText = (TextView) findViewById(R.id.myPersonalInfo_goal);
        CheckBox exercise_check = (CheckBox) findViewById(R.id.exercise_check);
        CheckBox calorie_check = (CheckBox) findViewById(R.id.calrorie_check);
        Button goal_button = (Button) findViewById(R.id.make_a_goal_btn);
        Button reward_button = (Button) findViewById(R.id.get_reward_btn);
        Button take_care_btn = (Button) findViewById(R.id.take_care_btn);

        String myinfo=((Personal_info)Personal_info.myInfo).myinfo;

        infoText.setText(myinfo);
        warnMsg=this;



        goal_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent3= new Intent(today_goal.this, MyService.class);
                //체크박스로 오늘의 목표 달성도 체크
                //목표 달성도에 따라 성과가 MyService클래스로 넘어간다
                if (!exercise_check.isChecked()&&!calorie_check.isChecked()) {
                    warning = "니가 그렇지 뭐";
                }
                else if(!exercise_check.isChecked()&&calorie_check.isChecked()){
                    warning = "의지박약";
                }
                else if(!calorie_check.isChecked()&&exercise_check.isChecked()){













                    warning="돼지";
                }
                else if(exercise_check.isChecked()&&calorie_check.isChecked()) {
                    warning="WINNER";
                }
                Toast.makeText(getApplicationContext(),warning,Toast.LENGTH_LONG).show();
                startService(intent3);
                warningMSG=warning;
            }


        });



        reward_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getApplicationContext(),"조금만 더 하면 여친이 생기나?",Toast.LENGTH_LONG).show();
            }
        });
        take_care_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getApplicationContext(),"넌 지금까지 충분히 잘했어 오늘 하루만 쉬자",Toast.LENGTH_LONG).show();
            }
        });


        }

    }

