import java.util.Arrays;
class ResistorColor {
    int colorCode(String color) {
        String[] colors = colors();
        return Arrays.asList(colors).indexOf(color.toLowerCase());
    }

    String[] colors() {
        String[] color = {"black", "brown", "red", "orange", "yellow", "green", "blue"
            ,"violet", "grey", "white"};
        return color;
    }
}
