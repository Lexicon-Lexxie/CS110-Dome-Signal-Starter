const signalButton = document.querySelector("#signal-button");
const domeStatus = document.querySelector("#dome-status");

signalButton.addEventListener("click", () => {
	domeStatus.textContent = "Kairova status: online - signal confirmed for the next crew";
});
