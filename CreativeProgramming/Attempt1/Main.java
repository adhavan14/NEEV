package org.example;


import processing.core.PApplet;

public class Main extends PApplet {

    int p1 = 0;
    int p2 = 0;
    int p3 = 0;
    int p4 = 0;
    public static void main(String[] args) {
        PApplet.main("org.example.Main", args);
    }

    @Override
    public void settings() {
        super.settings();
        size(640, 480);
    }


    @Override
    public void draw() {
       ellipse(p1, 1*(480/5), 20, 20);
       ellipse(p2, 2*(480/5),20,20);
       ellipse(p3, 3*(480/5), 20,20);
       ellipse(p4, 4*(480/5), 20,20);
       p1+=1;
       p2+=2;
       p3+=3;
       p4+=4;
    }

}