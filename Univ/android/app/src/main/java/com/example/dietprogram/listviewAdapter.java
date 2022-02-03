package com.example.dietprogram;

import android.app.LauncherActivity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.util.ArrayList;

public class listviewAdapter extends BaseAdapter {
    Context context;
    ArrayList<listitem>listitems=new ArrayList<listitem>();
    //리스트뷰 어댑터에서 상속받아 구성

    public listviewAdapter(Context context){
        this.context=context;
    }
    public int getCount(){
        return listitems.size();
    }
    public Object getItem(int i){
        return listitems.get(i);
    }
    public long getItemId(int i){
        return i;
    }

    public View getView(int position, View convertView, ViewGroup parent){

        //listview_item를 inflate해서 참조 획득
        if(convertView == null){
            LayoutInflater inflater=(LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            convertView=inflater.inflate(R.layout.listview_item,parent,false);
        }
        TextView menu_text=(TextView) convertView.findViewById(R.id.today_menu);
        TextView calorie_text=(TextView) convertView.findViewById(R.id.today_menu_calorie);

        listitem listitem= listitems.get(position); //데이터가져와서 입력
        menu_text.setText(listitem.getMenu());
        calorie_text.setText(Float.toString(listitem.getCalorie()));

        return convertView;
    }
    public void addItem(String name, float calorie){ //대화상자에서 작성한 메뉴와 칼로리를 리스트에 추가
        listitem listitem=new listitem();
        listitem.setMenu(name);
        listitem.setCalorie(calorie);
        listitems.add(listitem);
    }
    public void clear(){
        listitems.clear();
    } //아이템 삭제




}
