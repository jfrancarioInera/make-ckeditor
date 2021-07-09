/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Heading,
  Bold,
  Italic,
  Underline,

  Link,
  List,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'bold',
      'italic',
      'underline',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'link',
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
};
