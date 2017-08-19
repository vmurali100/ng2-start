import { Component,Input } from '@angular/core';
import { User } from '../shared/modals/user';

@Component({
	selector:'user-profile',
	template:`<div class='jumbotron' *ngIf='user'>

				<h3>User Name : {{user.username}}</h3>
				<h3>User Email : {{user.email}}</h3>
				<input type='text' class='form-control' [(ngModel)]='user.email'>
			</div>`
})

export class userProfileComponent{
	@Input() user:User;  
	
}