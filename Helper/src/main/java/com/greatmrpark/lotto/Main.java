package com.greatmrpark.lotto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class Main {
    
    /**
     * �ζǼ���
     */
    int num[] = {
               1,  2,  3,  4,  5
            ,  6,  7,  8,  9, 10
            , 11, 12, 13, 14, 15
            , 16, 17, 18, 19, 20
            , 21, 22, 23, 24, 25
            , 26, 27, 28, 29, 30
            , 31, 32, 33, 34, 35
            , 36, 37, 38, 39, 40
            , 41, 42, 43, 44, 45
    };
    
    /**
     * ��÷��ȣ
     *  0 : time     : ȸ��
     *  1 : dt       : ��÷��
     *  2 : num1st   : ��÷��ȣ 1��°
     *  3 : num2nd   : ��÷��ȣ 2��°
     *  4 : num3th   : ��÷��ȣ 3��°
     *  5 : num4th   : ��÷��ȣ 4��°
     *  6 : num5th   : ��÷��ȣ 5��°
     *  7 : num6th   : ��÷��ȣ 6��°
     *  8 : numbns   : ��÷��ȣ ���ʽ� ��ȣ
     *  9 : numsum   : ��÷��ȣ ��
     * 10 : num1bndl : 1���ӵȹ�ȣ����
     * 11 : num2bndl : 2��ȣ���ӹ���
     * 12 : num3bndl : 3��ȣ���ӹ���
     * 13 : num4bndl : 4��ȣ���ӹ���
     * 14 : num5bndl : 5��ȣ���ӹ���
     * 15 : num6bndl : 6��ȣ���ӹ���
     * {
     *    "time":""
     *  , "dt":""
     *  , "num1st":""
     *  , "num2nd":""
     *  , "num3th":""
     *  , "num4th":""
     *  , "num5th":""
     *  , "num6th":""
     *  , "numbns":""
     *  , "numsum":""
     *  , "numbndl":[
     *            {
     *                bndl : 1
     *              , srl : [
     *                        {1}
     *                      , {2}
     *                      , {3}
     *                  ]
     *            }
     *          , {}
     *          , {}
     *          , {}
     *          , {}
     *          , {}
     *      ]
     * }
     */
    HashMap<String, Object> numBndlSrlMap = new HashMap<>();
    HashMap<String, Object> numBndlMap = new HashMap<>();
    ArrayList<HashMap<String, Object>> wNumList = new ArrayList<>();
    
    /**
     * �ζǹ�ȣ
     */
    int num1st = 0; // ù��°
    int num2nd = 0; // �ι�°
    int num3th = 0; // ����°
    int num4th = 0; // �׹�°
    int num5th = 0; // �ټ���°
    int num6th = 0; // ������°
    
    /**
     * ����ζǹ�ȣ
     */
    int pnum1st = 0; // ù��°  
    int pnum2nd = 0; // �ι�°
    int pnum3th = 0; // ����°
    int pnum4th = 0; // �׹�°
    int pnum5th = 0; // �ټ���°
    int pnum6th = 0; // ������°
    
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        for(int i = 1; i<45; i++) {
            System.out.println(String.format("%s, %s", "KOREA", "JAPAN"));
        }
    }
}
