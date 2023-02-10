import Handlebars from 'handlebars/dist/handlebars.runtime';

import typography from './typography/typography.hbs';
import textfield from './text-field/text-field.hbs';
import button from './button/button.hbs';
import link from './link/link.hbs';

Handlebars.registerPartial('typography', typography);
Handlebars.registerPartial('textfield', textfield);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('link', link);
