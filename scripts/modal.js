/* Desenvolva seu código aqui... */

function modal() {
	const modalButtons = document.querySelectorAll("[data-control-modal]");

	modalButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			const modalId = e.target.getAttribute("data-control-modal");

			const modalWrapper = document.getElementById(modalId);

			modalWrapper.classList.toggle("active");

			clickOutside(modalWrapper);
		});
	});

	function clickOutside(modalWrapper) {
		window.addEventListener("click", (e) => {
			if (e.target === modalWrapper) {
				modalWrapper.classList.remove("active");
			}
		});
	}

	function tooltip() {
		const tooltipButtons = document.querySelectorAll("[data-control-tooltip]");
		const modalWrapper = document.querySelector(".modal-wrapper");

		tooltipButtons.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				e.preventDefault();
        
				const tooltipId = e.target.getAttribute("data-control-tooltip");
				const tooltipWrapper = document.getElementById(tooltipId);

				tooltipWrapper.classList.toggle("active");
				modalWrapper.classList.remove("active");
			});
		});
	}
	tooltip();
}

modal();

function showPassword() {
	const togglePasswordBtn = document.querySelector(".toggle-password");
	const inputPassword = document.getElementById("password");

	togglePasswordBtn.addEventListener("click", () => {
		togglePasswordBtn.classList.toggle("active");

		if (togglePasswordBtn.classList.contains("active")) {
			inputPassword.setAttribute("type", "text");
		} else {
			inputPassword.setAttribute("type", "password");
		}
	});
}
showPassword();
