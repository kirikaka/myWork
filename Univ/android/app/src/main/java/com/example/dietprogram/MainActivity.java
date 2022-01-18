package com.example.dietprogram;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //각 액티비티로 넘어갈 수 있는 버튼구현

        Button page1=(Button)findViewById(R.id.personal_page_btn);
        Intent intent1=new Intent(this,Personal_info.class);
        page1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                startActivity(intent1);
            }
        });
        Button page2=(Button)findViewById(R.id.today_work_out_page_btn);
        Intent intent2=new Intent(this,today_work_out.class);
        page2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                startActivity(intent2);
            }
        });
        Button page3=(Button)findViewById(R.id.calorie_diet_page_btn);
        Intent intent3=new Intent(this,calorie_diet.class);
        page3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                startActivity(intent3);
            }
        });
        Button page4=(Button)findViewById(R.id.today_goal_page_btn);
        Intent intent4=new Intent(this,today_goal.class);
        page4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                startActivity(intent4);
            }
        });
        Button end=(Button)findViewById(R.id.end_btn);
        //앱 종료 및 서비스 Destroy(음악 멈춤)

        end.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                stopService(new Intent(MainActivity.this, MyService.class));
                finish();
            }
        });




    }





}