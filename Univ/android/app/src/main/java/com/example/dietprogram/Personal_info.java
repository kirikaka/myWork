package com.example.dietprogram;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import org.w3c.dom.Text;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;


public class Personal_info extends AppCompatActivity {
    String FILENAME = "info.txt";
    public static final String PREFS_NAME="MyPrefs";
    public static Context myInfo; //다른 액티비티로 값을 넘겨주는 Context선언
    public String myinfo;
    public String saved_info;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.personal);
        myInfo=this;


        TextView infoText = (TextView) findViewById(R.id.myPersonalInfo_personal);
        EditText eText1 = (EditText) findViewById(R.id.height_input);
        EditText eText2 = (EditText) findViewById(R.id.weight_input);
        Button input = (Button) findViewById(R.id.input_btn);
        try {
            FileInputStream fis = openFileInput(FILENAME);
            byte[] buffer = new byte[fis.available()];
            fis.read(buffer);
            saved_info=new String(buffer);
        }catch(IOException e){
        }

        input.setOnClickListener(new View.OnClickListener() { //키와 체중을 입력받는 버튼 구현
            @Override
            public void onClick(View view) {
                String height_str = eText1.getText().toString();
                String weight_str = eText2.getText().toString();
                //예외처리 - EditText가 비어있을때 대비
                if (weight_str == null || weight_str.trim().equals("")) {
                    weight_str = "0";
                }

                if (height_str == null || height_str.trim().equals("")) {
                    height_str = "0";
                }

                float weight = Float.parseFloat(weight_str);
                float height = Float.parseFloat(height_str);

                infoText.setText(saved_info);

                String Personal_info = height + "cm       " + weight + "kg";
                myinfo=Personal_info; //각 액티비티에 넘겨줄 변수 저장
                infoText.setText(height + "cm       " + weight + "kg");
                try {
                    FileOutputStream fos = openFileOutput(FILENAME,Context.MODE_PRIVATE);
                    fos.write(Personal_info.getBytes());
                    fos.close();
                } catch (IOException e) {

                }

                //분모가 0이 되는 예외처리
                if (((height / 100) * (height / 100)) != 0) {
                    float bmi = weight / ((height / 100) * (height / 100));

                TextView bmiText = (TextView) findViewById(R.id.result_bmi);//BMI위험도 계산
                if (bmi > 30.0) {
                    bmiText.setText("중등도 비만");
                } else if (bmi < 30.0 && bmi >= 25.0) {
                    bmiText.setText("경도 비만");
                } else if (bmi < 25.0 && bmi >= 23.0) {
                    bmiText.setText("과체중");
                } else if (bmi < 23.0 && bmi >= 18.5) {
                    bmiText.setText("정상");
                } else {
                    bmiText.setText("저체중");
                }
                }
            }
        });
    }
}

