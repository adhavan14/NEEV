class PrimeCalculator {

    boolean isPrime(int digit) {

        for (int i = 2; i<=digit/2; i++) {
            if (digit%i==0){
                return false;
            }
        }
        return true;
    }
    int nth(int nth) {

        if (nth == 0) {
            throw new IllegalArgumentException();
        }
        if (nth==1)
            return 2;
        int count = 1;
        int digit = 3;
        while(count<nth) {
            if (isPrime(digit)) {
                count++;
            }
            digit++;
        }
        return --digit;
    }

}
