import { Component } from '@angular/core';
import { User } from './shared/modals/user';



@Component({
	selector:'my-app',
	templateUrl:`app/app.component.html`,
	styleUrls:[`app/app.component.css`]
})
export class AppComponent {
	users:User[]=[
	
	{
		"id": 81220,
		"email": "LAltermatt@sagittis.io",
		"username": "JMangat",
		"password": "HfagO"
	},
	{
		"id": 81221,
		"email": "JWillett@amet.org",
		"username": "SBatrouny",
		"password": "JqMPk"
	},
	{
		"id": 81222,
		"email": "AMiljour@sit.org",
		"username": "WMarrinson",
		"password": "gp3Ap"
	},
	{
		"id": 81223,
		"email": "LLoya@porta.org",
		"username": "LChase",
		"password": "vtRx4"
	},
	{
		"id": 81224,
		"email": "LHolland@amet.com",
		"username": "IDelatorre",
		"password": "biSQf"
	}
	]
	activeUser : User;
	selectuser(user){
		this.activeUser=user;
		}
	onUserCreated(event){
		this.users.push(event.user)
	}
}