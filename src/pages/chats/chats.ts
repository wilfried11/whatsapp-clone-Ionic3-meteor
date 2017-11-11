import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import * as moment from 'moment';

import { Chat, MessageType } from '../../models';
 
@Component({
  templateUrl: 'chats.html'
})
export class ChatsPage {

	   chats: Observable<Chat[]>;
 
  constructor() {
 		 this.chats = this.findChats();
  }

  //remove chat

  removeChat(chat: Chat): void {
    this.chats = this.chats.map((chatsArray: Chat[]) => {
      const chatIndex = chatsArray.indexOf(chat);
      if (chatIndex !== -1) {
        chatsArray.splice(chatIndex, 1);
      }
 
      return chatsArray;
    });
  }

  // list chat

   private findChats(): Observable<Chat[]> {
    return Observable.of([
      {
        _id: '0',
        title: 'Uchia Sassuke',
        picture: '../../assets/profils/bucks.gif',
        lastMessage: {
          content: 'Hey comments vous aller?',
          createdAt: moment().subtract(1, 'hours').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '1',
        title: 'Sakura Sama',
        picture: '../../assets/profils/bulls.gif',
        lastMessage: {
          content: 'Slt c\'est encore moi',
          createdAt: moment().subtract(2, 'hours').toDate(),
          type: MessageType.TEXT
         
        }
      },
      {
      	        _id: '2',
        title: 'Naruto Uzumaki',
        picture: '../../assets/profils/celtic.gif',
        lastMessage: {
          content: ' slt j\'aimerai apprendre le sharingan cmt faire',
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '3',
        title: 'Kenneth Peter',
        picture: '../../assets/profils/hawks.gif',
        lastMessage: {
          content: ' Bonjour et bonne journee a tous kiss!',
          createdAt: moment().subtract(4, 'days').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '4',
        title: 'Thomas Toto',
        picture: '../../assets/profils/hornets.gif',
        lastMessage: {
          content: 'xai la creme de la creme',
          createdAt: moment().subtract(2, 'weeks').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '4',
        title: 'Kakachi Sensei',
        picture: '../../assets/profils/jazz.gif',
        lastMessage: {
          content: 'Hey toi Naruto prends l\'exemple sur Sassuke',
          createdAt: moment().subtract(2, 'weeks').toDate(),
          type: MessageType.TEXT
        }
      }
    ]);
	}

}