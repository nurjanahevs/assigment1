let alert_items = document.querySelectorAll(".alert_item");
	let btns = document.querySelectorAll(".btn");
	let alert_wrapper = document.querySelector(".alert_wrapper");
	let close_btns = document.querySelectorAll(".close");

	btns.forEach(function(btn, btn_index){
		btn.addEventListener("click", function(){
			alert_wrapper.classList.add("active");

			alert_items.forEach(function(alert_item, alert_index){
				if(btn_index == alert_index){
					alert_item.style.top = "50%";
				}
				else{
					alert_item.style.top = "-100%";
				}
			})
		})
	})

	close_btns.forEach(function(close, close_index){
		close.addEventListener("click", function(){
			alert_wrapper.classList.remove("active");

			alert_items.forEach(function(alert_item, alert_index){
				alert_item.style.top = "-100%";
			})
		})
	})