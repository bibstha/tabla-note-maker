import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "noteTemplate", "libraryNote", "notesContainer", "songBol" ]

  connect() {
    // if the song has notes, add them to the page
    if (this.songBolTarget.value) {
      let noteTexts = this.songBolTarget.value.split(", ");
      noteTexts.forEach(noteText => {
        let note = this.noteTemplateTarget.content.cloneNode(true);
        note.querySelector(".note-content").textContent = noteText;
        this.notesContainerTarget.appendChild(note);
      });
    }
  }

  addSongNote(event) {
    let noteText = event.target.textContent;
    let note = this.noteTemplateTarget.content.cloneNode(true);
    note.querySelector(".note-content").textContent = noteText;

    this.notesContainerTarget.appendChild(note);
    this.updateSongBol();
  }

  deleteSongNote(event) {
    event.target.closest(".note").remove();
    this.updateSongBol();
  }

  updateSongBol() {
    // build a string by comma separating the note text of each note
    // and set the value of the hidden input to that string
    let noteTexts = this.notesContainerTarget.querySelectorAll(".note-content");
    let noteTextArray = Array.from(noteTexts).map(note => note.textContent);
    let noteString = noteTextArray.join(", ");
    this.songBolTarget.value = noteString;
  }
}
