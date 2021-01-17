function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add("hide");
	modal.classList.remove("show");
	document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add("show");
	modal.classList.remove("hide");
	document.body.style.overflow = "hidden";
	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function modal(triggerSelector, modalSelector, modalTimerId) {
	// Modal

	const modalTrigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector);

	modalTrigger.forEach((btn) => {
		btn.addEventListener("click", () => openModal(modalSelector, modalTimerId));
	});

	modal.addEventListener("click", (e) => {
		if (e.target === modal || e.target.getAttribute("data-close") == "") {
			closeModal(modalSelector);
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && modal.classList.contains("show")) {
			closeModal(modalSelector);
		}
	});



	function showModalByScroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
		) {
			openModal(modalSelector, modalTimerId);
			window.removeEventListener("scroll", showModalByScroll);
		}
	}
	window.addEventListener("scroll", showModalByScroll);

	//get and create menu-card - first variant
	// const getResource = async (url) => {
	//   const res = await fetch(url);

	//   if (!res.ok) {
	//     throw new Error(`Could't fetch ${url}, status: ${res.status}`);
	//   }

	//   return await res.json();
	// };

	// getResource("http://localhost:3000/menu").then(data => {
	// data.forEach(({img, altimg, title, descr, price}) => {
	//     new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
	// });
	// });

	//create menu card - second variant
	// getResource("http://localhost:3000/menu").then(data => createCard(data));

	// function createCard(data) {
	//   data.forEach(({ img, altimg, title, descr, price }) => {
	//     const element = document.createElement("div");
	//     element.classList.add("menu__item");
	//     element.innerHTML = `
	//               <img src=${img} alt=${altimg}>
	//               <h3 class="menu__item-subtitle">${title}</h3>
	//               <div class="menu__item-descr">${descr}</div>
	//               <div class="menu__item-divider"></div>
	//               <div class="menu__item-price">
	//                   <div class="menu__item-cost">Цена:</div>
	//                   <div class="menu__item-total"><span>${price*78}</span> руб/день</div>
	//               </div>
	//           `;
	//       document.querySelector('.menu .container').append(element);
	//   });
	// };


}

export {closeModal};
export {openModal};
export default modal;
