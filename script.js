$(document).ready(function(){
	$('a').click(function(){
		$('a').removeClass("active");
		$('li').removeClass("active");
		$(this).addClass("active");
		$(this).closest("ul").closest("li").addClass("active");
	});
	var forms = document.getElementsByClassName('needs-validation');
	var validation = Array.prototype.filter.call(forms, function(form) {
	form.addEventListener('submit', function(event) {
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		form.classList.add('was-validated');
	}, false);
	});
});