import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
				<AddNote handleAddNote={handleAddNote} />
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					time={note.time}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			{/* <AddNote handleAddNote={handleAddNote} /> */}
		</div>
	);
};

export default NotesList;
