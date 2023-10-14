class RnaTranscription {

    String transcribe(String dnaStrand) {
        String rna = "";
        for(int i=0;i<dnaStrand.length();i++) {
            char word = dnaStrand.charAt(i);
            if (word == 'G')
                rna += 'C';
            if (word == 'C')
                rna += 'G';
            if (word == 'T') 
                rna += 'A';
            if (word == 'A')
                rna += 'U';
        }
        return rna;
    }

}
