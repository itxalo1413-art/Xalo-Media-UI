'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Bold,
    Essentials,
    Italic,
    Mention,
    Paragraph,
    Undo,
    Underline,
    Link,
    List,
    Heading,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageUpload,
    Base64UploadAdapter,
    Indent,
    BlockQuote,
    Table,
    TableToolbar,
    MediaEmbed,
    HorizontalLine,
    Font,
    Alignment
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

interface EditorProps {
    value: string;
    onChange: (data: string) => void;
    placeholder?: string;
}

export default function CustomEditor({ value, onChange, placeholder }: EditorProps) {
    return (
        <div className="w-full ck-editor-wrapper">
            <CKEditor
                editor={ClassicEditor}
                config={{
                    licenseKey: 'GPL', // Use 'GPL' for open source version
                    language: 'vi',
                    placeholder: placeholder || 'Bắt đầu viết nội dung...',
                    plugins: [
                        Essentials,
                        Paragraph,
                        Heading,
                        Bold,
                        Italic,
                        Underline,
                        Font,
                        Alignment,
                        Link,
                        List,
                        Image,
                        ImageToolbar,
                        ImageCaption,
                        ImageStyle,
                        ImageUpload,
                        Base64UploadAdapter,
                        Indent,
                        BlockQuote,
                        Table,
                        TableToolbar,
                        MediaEmbed,
                        HorizontalLine,
                        Undo,
                    ],
                    toolbar: [
                        'undo', 'redo',
                        '|',
                        'heading',
                        '|',
                        'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
                        '|',
                        'bold', 'italic', 'underline',
                        '|',
                        'link', 'uploadImage', 'insertTable', 'blockQuote', 'mediaEmbed', 'horizontalLine',
                        '|',
                        'alignment',
                        '|',
                        'bulletedList', 'numberedList', 'outdent', 'indent',
                    ],
                    heading: {
                        options: [
                            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
                        ]
                    },
                    image: {
                        toolbar: [
                            'imageStyle:inline',
                            'imageStyle:block',
                            'imageStyle:side',
                            '|',
                            'toggleImageCaption',
                            'imageTextAlternative'
                        ]
                    },
                    table: {
                        contentToolbar: [
                            'tableColumn',
                            'tableRow',
                            'mergeTableCells'
                        ]
                    }
                }}
                data={value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChange(data);
                }}
            />
            <style jsx global>{`
                .ck-editor-wrapper {
                    width: 100% !important;
                    min-width: 100% !important;
                }
                .ck-editor {
                    width: 100% !important;
                }
                .ck-editor__editable_inline {
                    min-height: 400px;
                    border-bottom-left-radius: 24px !important;
                    border-bottom-right-radius: 24px !important;
                    padding: 0 2rem !important;
                }
                .ck-toolbar {
                    border-top-left-radius: 24px !important;
                    border-top-right-radius: 24px !important;
                    background-color: #f9fafb !important;
                    border-color: #f3f4f6 !important;
                    padding: 0.5rem !important;
                }
                .ck.ck-editor__main>.ck-editor__editable {
                    background: white !important;
                    border-color: #f3f4f6 !important;
                }
                .ck.ck-editor__main>.ck-editor__editable.ck-focused {
                    border-color: #3b82f6 !important;
                    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.05) !important;
                }
            `}</style>
        </div>
    );
}
