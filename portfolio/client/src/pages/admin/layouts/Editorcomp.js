import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Editorcomp = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const handleEditorChange = (content, editor) => {};
  return (
    <>
      {" "}
      <section id="content">
        <main>
          <Editor
            apiKey="5kbafv8nngfe9hbo4ku62nn5gnhkhx8ozd9rh4hha1b43vsy"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(content, editor) =>
              handleEditorChange(content, editor)
            }
          />
          {/* <button onClick={log}>Log editor content</button> */}
        </main>
      </section>
    </>
  );
};

export default Editorcomp;
