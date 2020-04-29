import React from "react"

export default function Sidebar(){
return (<div className="sidebar-container">
    <div class="profile">
		
			<div class="profile-sidebar">
				{/* <!-- SIDEBAR USERPIC --> */}
				<div class="profile-userpic">
					<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="img-responsive" alt=""/>
				</div>
				{/* <!-- END SIDEBAR USERPIC -->
				<!-- SIDEBAR USER TITLE --> */}
				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
						Marcus Doe
					</div>
					<div class="profile-usertitle-job">
						Developer
					</div>
				</div>
				{/* <!-- END SIDEBAR USER TITLE -->
				<!-- SIDEBAR BUTTONS --> */}
				<div class="profile-userbuttons">
					<button type="button" class="btn btn-success btn-sm">Follow</button>
					<button type="button" class="btn btn-danger btn-sm">Message</button>
				</div>
				{/* <!-- END SIDEBAR BUTTONS -->
				<!-- SIDEBAR MENU --> */}
				<div class="profile-usermenu">
					<ul class="nav">
						<li class="active">
							<a href="#">
							<i class="glyphicon glyphicon-home"></i>
							Overview </a>
						</li>
						<li>
							<a href="#">
							<i class="glyphicon glyphicon-user"></i>
							Account Settings </a>
						</li>
						<li>
							<a href="#" target="_blank">
							<i class="glyphicon glyphicon-ok"></i>
							Tasks </a>
						</li>
						<li>
							<a href="#">
							<i class="glyphicon glyphicon-flag"></i>
							Help </a>
						</li>
					</ul>
				</div>
				{/* <!-- END MENU --> */}
			</div>
		
	</div>
</div>)}