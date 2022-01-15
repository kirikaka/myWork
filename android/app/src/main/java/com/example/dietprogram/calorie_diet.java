package com.example.dietprogram;

import android.content.Intent;
import android.os.Bundle;
import android.text.Layout;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.PopupMenu;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;

public class calorie_diet extends AppCompatActivity {
    float calorie_limit=0;
    float calorie_eat=0;
    float calorie_left=0;

    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.calorie_diet);

        TextView myPersonalInfo_diet=(TextView)findViewById(R.id.myPersonalInfo_diet);
        Button popupBtn=(Button)findViewById((R.id.popup_btn));
        ListView listView = (ListView)findViewById(R.id.today_my_menu);

        Button calorie_list=(Button)findViewById(R.id.view_calrorie_list);

        String myinfo=((Personal_info)Personal_info.myInfo).myinfo;
        myPersonalInfo_diet.setText(myinfo);//자신의 체중및 신장 표시

        listviewAdapter adapter = new listviewAdapter(calorie_diet.this);//리스트뷰 어댑터 선언
        listView.setAdapter(adapter);


        popupBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                EditText Whole_calorie=(EditText) findViewById(R.id.oneday_calrorie_input);
                EditText eat_calorie=(EditText) findViewById(R.id.present_calrorie_input);
                EditText left_calorie=(EditText) findViewById(R.id.left_calrorie_input);

                final PopupMenu popupMenu=new PopupMenu(getApplicationContext(),view); //팝업메뉴선언
                getMenuInflater().inflate(R.menu.popup,popupMenu.getMenu());    //팝업 생성
                popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
                    @Override
                    public boolean onMenuItemClick(MenuItem menuItem) {
                        if (menuItem.getItemId() == R.id.update_menu) { //팝업에서 update선택 시

                            LayoutInflater inflater=getLayoutInflater(); //layoutinflater싑게 얻어오도록한다
                            View v = inflater.inflate(R.layout.edit_menu,null); //view에 할당

                            EditText menu_name=(EditText) v.findViewById(R.id.menu_update_input);
                            EditText menu_calorie=(EditText) v.findViewById(R.id.calorie_input);
                            Button pass_data_btn=(Button)v.findViewById(R.id.update_dialog_btn);

                            AlertDialog.Builder builder=new AlertDialog.Builder(calorie_diet.this); //객체 생성
                            builder.setView(v);
                            AlertDialog dialog= builder.create(); //대화 상자 생성
                            dialog.show(); //화면에 출력

                            pass_data_btn.setOnClickListener(new View.OnClickListener() {
                                @Override
                                public void onClick(View view) {
                                    adapter.addItem(menu_name.getText().toString(),Float.parseFloat(menu_calorie.getText().toString()));
                                    calorie_eat=calorie_eat+Float.parseFloat(menu_calorie.getText().toString());
                                    String calorie_str=Whole_calorie.getText().toString();
                                    //Edittext에서 얻어온 문자열 예외처리
                                    if (calorie_str == null || calorie_str.trim().equals("")) {
                                        calorie_str = "0";
                                    }
                                    calorie_limit=Float.parseFloat(calorie_str);

                                    calorie_left=calorie_limit-calorie_eat;
                                    eat_calorie.setText(Float.toString(calorie_eat)+"kcal");
                                    left_calorie.setText(Float.toString(calorie_left)+"kcal");

                                    adapter.notifyDataSetChanged(); //리스트 바뀐거 반영
                                    dialog.dismiss();

                                }
                            });
                        }
                        else {//clear선택시

                            adapter.clear();
                            adapter.notifyDataSetChanged();
                            //칼로리도 0으로 재 출력
                            calorie_eat=0;
                            calorie_left=0;
                            eat_calorie.setText("");
                            left_calorie.setText("");

                        }
                        return false;


                    }

                    });
                popupMenu.show();

            }
        });

        calorie_list.setOnClickListener(new View.OnClickListener() { //칼로리 표를 보는 버튼 구현
            @Override
            public void onClick(View view) {
                ImageView calorieList=(ImageView) findViewById(R.id.list_view);
                if(calorieList.getVisibility()==view.VISIBLE){
                    calorieList.setVisibility(view.INVISIBLE);
                }else{
                    calorieList.setVisibility(view.VISIBLE);
                }

            }
        });



    }
}
