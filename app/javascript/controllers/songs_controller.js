import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "noteTemplate", "libraryNote", "notesContainer" ]

  connect() {}

  addSongNote(event) {
    let noteText = event.target.textContent;
    let note = this.noteTemplateTarget.content.cloneNode(true);
    note.querySelector(".note-content").textContent = noteText;

    this.notesContainerTarget.appendChild(note);
  }

  deleteSongNote(event) {
    event.target.closest(".note").remove();
  }
}
