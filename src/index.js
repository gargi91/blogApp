import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

ClassicEditor.create(document.querySelector("#editor"), {
	// toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
	// toolbar: "standard",
	allowedContent: "p b i ul li; img[!src]"
})
	.then((editor) => {
		window.editor = editor;
	})
	.catch((err) => {
		console.error(err.stack);
	});
