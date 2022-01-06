package com.example.dietprogram;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Random;

public class today_work_out extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.today_work_out);
        TextView infoText=(TextView)findViewById(R.id.myPersonalInfo_personal2);
        Button which_work=(Button)findViewById(R.id.which_work_out_btn);
        CheckBox work_out=(CheckBox) findViewById(R.id.yesterday_exercise);
        TextView using_cal=(TextView)findViewById(R.id.use_calorie);
        ProgressBar hard=(ProgressBar)findViewById(R.id.show_hard_bar);

        Random rand=new Random(); //랜덤하게 운동을 선택하기 위해 랜덤 선언
        String myinfo=((Personal_info)Personal_info.myInfo).myinfo;
        infoText.setText(myinfo); //자신의 체중및 신장 표시



        which_work.setOnClickListener(new View.OnClickListener() { // 운동선택해주는 버튼 구현
            @SuppressLint("ResourceType")
            @Override
            public void onClick(View view) {
                TextView today_work_out_text=(TextView)findViewById(R.id.today_work_out);
                ImageView todayWork=(ImageView) findViewById(R.id.imageView2);

                int result =rand.nextInt(4); //랜덤하게 0~3까지의 숫자하나 받는다
                if(work_out.isChecked()){ //어제 운동했으면 휴식포함
                    switch(result){
                        case 0:
                            today_work_out_text.setText("무산소 운동");
                            todayWork.setImageResource(R.drawable.muscle); //전면의 사진을 바꿔주는 메소드드
                            using_cal.setText("480kcal(한 시간당)");
                            hard.setProgress(70);
                            break;
                        case 1:
                            today_work_out_text.setText("인터벌 트레이닝");
                            todayWork.setImageResource(R.drawable.interval);
                            using_cal.setText("1040kcal(한 시간당)");
                            hard.setProgress(80);
                            break;
                        case 2:
                            today_work_out_text.setText("유산소 운동");
                            todayWork.setImageResource(R.drawable.running);
                            using_cal.setText("800kcal(한 시간당)");
                            hard.setProgress(67);
                            break;
                        case 3:
                            today_work_out_text.setText("휴식");
                            todayWork.setImageResource(R.drawable.relax);
                            break;
                        default:
                            today_work_out_text.setText("휴식 - 천운");
                            todayWork.setImageResource(R.drawable.relax);
                    }
                }
                else{ //어제 운동안했으면 운동 추가 X
                    switch(result){
                        case 0:
                            today_work_out_text.setText("무산소 운동");
                            todayWork.setImageResource(R.drawable.muscle);
                            using_cal.setText("480kcal(한 시간당)");
                            hard.setProgress(70);
                            break;
                        case 1:
                            today_work_out_text.setText("인터벌 트레이닝");
                            todayWork.setImageResource(R.drawable.interval);
                            using_cal.setText("1040kcal(한 시간당)");
                            hard.setProgress(80);
                            break;
                        case 2:
                            today_work_out_text.setText("유산소 운동");
                            todayWork.setImageResource(R.drawable.running);
                            using_cal.setText("800kcal(한 시간당)");
                            hard.setProgress(67);
                            break;
                        case 3:
                            today_work_out_text.setText("무산소 운동 + 다른 운동");
                            todayWork.setImageResource(R.drawable.muscle_running);
                            using_cal.setText("740kcal(한 시간당)");
                            hard.setProgress(85);
                            break;
                        default:
                            today_work_out_text.setText("휴식 - 천운");
                            todayWork.setImageResource(R.drawable.relax);

                    }
                }


            }

        });




    }


}
