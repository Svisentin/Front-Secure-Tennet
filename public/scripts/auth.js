document.addEventListener("DOMContentLoaded", () => {
	const backendURL = window.BACKEND_URL;

	const publicRoutes = ["/", "/authentication/sign-in", "/authentication/sign-up"];

	async function checkAuth() {
		try {
			const response = await fetch(`${backendURL}/auth/check-auth`, {
				credentials: "include",
			});

			if (!response.ok) {
				if (response.status === 401) {
					return { authenticated: false };
				}
				throw new Error("No autenticado");
			}

			return await response.json();
		} catch {
			return { authenticated: false };
		}
	}

	function updateLoginButtons(authenticated) {
		document.querySelectorAll(".loginButton").forEach((button) => {
			button.href = authenticated ? "/settings" : "/authentication/sign-in";
			button.textContent = authenticated ? "Mi cuenta" : "Iniciar sesión";
		});
	}

	function updateSidebarUser(user) {
		if (user?.email) {
			document.querySelectorAll(".mailUser").forEach((element) => {
				element.textContent = user.email;
			});
		}
	}

	async function protectRoutes() {
		const { authenticated, user } = await checkAuth();

		if (publicRoutes.includes(window.location.pathname)) {
			updateLoginButtons(authenticated);

			if (window.location.pathname === "/settings" && authenticated) {
				updateSidebarUser(user);
			}

			if (authenticated && ["/authentication/sign-in", "/authentication/sign-up"].includes(window.location.pathname)) {
				window.location.href = "/settings";
			}

			return;
		}

		if (!authenticated) {
			window.location.href = "/authentication/sign-in";
			return;
		}

		updateLoginButtons(authenticated);
		updateSidebarUser(user);
	}

	protectRoutes(); // Llamamos después de que todo esté definido
});
