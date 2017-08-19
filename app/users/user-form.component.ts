import { Component, Output, EventEmitter} from '@angular/core';
import { User } from '../shared/modals/user'

@Component({
	selector:'user-form',
	styles:[`
		form{
			padding:10px;
			background:#ECF0F1;
			border-radius:5px;
		}

	`],
	template:`
		<form #form='ngForm' (submit)='onSubmit()' *ngIf='active'>
		{{form.valid}}
			<div class='form-group' [ngClass]="{'has-error':username.invalid && username.touched}">
				<input type='text' name='username' class='form-control' required 

				[(ngModel)]='newUser.username' #username='ngModel' placeholder='User Name'

				>
				<span *ngIf='username.invalid && username.touched'>Name is Required</span>
			</div>
			<div class='form-group' [ngClass]="{'has-error':email.invalid && email.touched}">
				<input type='text' name='email' class='form-control' required placeholder='Email'
				[(ngModel)]='newUser.email' #email='ngModel'>
				<span *ngIf='email.invalid && email.touched'>Email is Required</span>
			</div>
			<button class='btn btn-lg btn-block btn-primary' [disabled]='form.invalid'>Create User</button>
		</form>
	`
})
export class UserFormComponent{
	@Output() userCreated = new EventEmitter();
	newUser:User=new User();
	active:boolean=true;
	onSubmit (){
		this.userCreated.emit({user:this.newUser})
		this.newUser=new User()
		this.active=false;
		setTimeout(()=>this.active=true,0)
	}
}