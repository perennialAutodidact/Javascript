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

const isEnharmonic = (note1, note2) => {
    //Test whether note1 and note2 are enharmonic, i.e. they sound the same.
    return noteToInt(note1) == noteToInt(note2)
}

const isValidNote = note => {
    // return true if note is a recognized format. False if not
    if(_note_dict[note[0]] == undefined){
        return false
    } else {        
        for(let i=1; i<note.length; i++){
            if(note[i] !== 'b' && note[i] !== '#'){
                console.log(`invalid char: ${note[i]}`);

                return false
            }
        }
        return true
    }
}

console.log(isValidNote("C###bbb#b"));

// """Return True if note is in a recognised format. False if not."""
// if note[0] not in _note_dict:
//     return False
// for post in note[1:]:
//     if post != 'b' and post != '#':
//         return False
// return True
