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

    note = note.replace('x','##'); //convert double sharp 'x' to two sharps '##'

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

const noteToInt = note => {
    // Convert notes in the form of C, C#, Cb, C##, etc. to an integer 
    // in the range of 0-11. 
    //NoteFormatError exception if the note format is not recognized
    let noteVal;

    if(isValidNote(note)){
        noteVal = _note_dict[note[0]]
    } else {
        console.log(`'${note}' is not a valid note`);
    }

    for(let i=1; i<note.length; i++){
        if(note[i] == 'b'){
            noteVal--;
        } else if(note[i] == '#'){
            noteVal++;
        }
    }
    return noteVal % 12
}

noteToInt('C###b')
