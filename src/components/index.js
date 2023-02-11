import Handlebars from 'handlebars/dist/handlebars.runtime';

import container from './container/container.hbs';
import paper from './paper/paper.hbs';
import typography from './typography/typography.hbs';
import textfield from './text-field/text-field.hbs';
import button from './button/button.hbs';
import buttonGoBack from './button-go-back/button-go-back.hbs';
import link from './link/link.hbs';
import divider from './divider/divider.hbs';
import avatar from './avatar/avatar.hbs';
import avatarLarge from './avatar-large/avatar-large.hbs';
import contactsListItem from './contacts-list-item/contacts-list-item.hbs';
import message from './message/message.hbs';
import infoRow from './info-row/info-row.hbs';

Handlebars.registerPartial('container', container);
Handlebars.registerPartial('paper', paper);
Handlebars.registerPartial('typography', typography);
Handlebars.registerPartial('textfield', textfield);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('buttonGoBack', buttonGoBack);
Handlebars.registerPartial('link', link);
Handlebars.registerPartial('divider', divider);
Handlebars.registerPartial('avatar', avatar);
Handlebars.registerPartial('avatarLarge', avatarLarge);
Handlebars.registerPartial('contactsListItem', contactsListItem);
Handlebars.registerPartial('message', message);
Handlebars.registerPartial('infoRow', infoRow);
