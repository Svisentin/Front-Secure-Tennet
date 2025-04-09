const publicRoutes = ["/", "/authentication/sign-in", "/authentication/sign-up"];

async function checkAuth() {
	try {
		const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/check-auth`, {
			credentials: "include",
		});

		if (!response.ok) {
			// Si la respuesta es 401 (No autorizado), devolver false sin mostrarlo en consola
			if (response.status === 401) {
				return { authenticated: false };
			}
			// Devolver error para otros estados
			throw new Error("No autenticado");
		}

		return await response.json();
	} catch {
		return { authenticated: false }; // Si hay algún otro error (por ejemplo, red), también devolvemos false
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

	// 1. Si la ruta es pública, actualizar botones
	if (publicRoutes.includes(window.location.pathname)) {
		updateLoginButtons(authenticated);

		// Si está en /settings y está autenticado, actualiza el sidebar
		if (window.location.pathname === "/settings" && authenticated) {
			updateSidebarUser(user);
		}

		// Si está autenticado y está en sign-in o sign-up, redirigir a /settings
		if (authenticated && ["/authentication/sign-in", "/authentication/sign-up"].includes(window.location.pathname)) {
			window.location.href = "/settings";
		}

		return; // Detener la ejecución aquí si la ruta es pública
	}

	// Si la ruta es privada y no está autenticado, redirigir a sign-in
	if (!authenticated) {
		window.location.href = "/authentication/sign-in";
		return;
	}

	// Si está autenticado en una ruta privada, actualizar botones y sidebar
	updateLoginButtons(authenticated);
	updateSidebarUser(user);
}
// Ejecutar la función cuando la página cargue
document.addEventListener("DOMContentLoaded", protectRoutes);
