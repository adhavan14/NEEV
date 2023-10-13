package org.example;

import processing.core.PApplet;

public class GUI extends PApplet {

    private int ball1 = 0;
    private int ball2 = 0;
    private int ball3 = 0;
    private int ball4 = 0;
    private static final int ball_size = 20;
    private static final int total_portion = 5;

    static {
        System.out.println("static block");
    }
    public void init() {
        PApplet.main("org.example.GUI");
    }

    @Override
    public void settings() {
        super.settings();
        size(WindowConstants.WIDTH, WindowConstants.HEIGHT);
    }

    @Override
    public void draw() {

        ellipse(ball1, calculate_portion(1), ball_size, ball_size);
        ellipse(ball2, calculate_portion(2),ball_size,ball_size);
        ellipse(ball3, calculate_portion(3), ball_size,ball_size);
        ellipse(ball4, calculate_portion(4), ball_size,ball_size);

        ball1+=1;
        ball2+=2;
        ball3+=3;
        ball4+=4;
    }

    private int calculate_portion(int portion) {
        return portion * (WindowConstants.HEIGHT / total_portion);
    }
}
