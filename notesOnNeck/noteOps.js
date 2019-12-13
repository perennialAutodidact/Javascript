const _note_dict = {
    'C':0,
    'D':2,
    'E':4,
    'F':5,
    'G':7,
    'A':9,
    'B':10,
}

const intToNote = (noteInt, accidentals='#') => {
    if(0 < noteInt || noteInt > 12){
        notesSharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        notesFlats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

        if(accidentals == '#'){
            return notesSharps[noteInt]
        } else if(accidentals == 'b'){
            return notesFlats[noteInt]
        } else {
            //raise FormatError()
            console.log(`${accidentals} is not valid as accidental.`);
            
        }
    } else {
        // raise RangeError()
        console.log(`int is out of bounds (0-11): ${noteInt}`);
    }

}

