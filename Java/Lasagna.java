public class Lasagna {

    int minutes = 40;
    public int expectedMinutesInOven() {
        return minutes;
    }

    public int remainingMinutesInOven(int actualMinute) {
        return minutes - actualMinute;
    }

    public int preparationTimeInMinutes(int layers) {
        return 2*layers;
    }

    public int totalTimeInMinutes(int layers, int actualMinute) {
        return (2*layers) + actualMinute;
    }
}
