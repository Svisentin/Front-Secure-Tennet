import type { APIRoute } from "astro";

export const get: APIRoute = function get() {
	/* IDEA: Can be dynamicized (alternative colors…) */

	const icon = /* html */ `
<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M24.5194 13.4429C24.4453 13.9533 24.1087 14.6468 23.7226 15.2497C23.2354 16.0105 22.4622 16.5433 21.5774 16.7283L17.6797 17.5434C17.0533 17.6744 16.4852 18.0022 16.0587 18.479L13.503 21.3357C13.0227 21.8725 12.687 21.7445 12.687 21.0244C12.6812 21.0511 11.4186 24.3072 14.7646 26.2371C16.0502 26.9787 17.9009 26.7122 19.1865 25.9707L25.9983 22.0416C28.5458 20.5722 30.3445 18.0863 30.9424 15.2089C30.966 15.095 30.9843 14.9808 31.004 14.8667L24.5194 13.4429Z" fill="url(#paint0_linear_2484_3243)" />
</svg>
`;

	return new Response(icon, {
		headers: {
			"Content-Type": "image/svg+xml",
		},
	});
};
