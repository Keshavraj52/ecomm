import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { users } from '../data-type';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private offcanvasService: NgbOffcanvas,private user:UserService,private activeRoute:ActivatedRoute){}
  usersdata:undefined|users;
  
  ngOnInit(): void {
    let userId =this.activeRoute.snapshot.paramMap.get('userId')
    userId && this.user.getuser(userId).subscribe((result)=>{
     this.usersdata=result;
    } )   
  }  

  
  
  
  
  
  closeResult = '';


	open(content: any) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
