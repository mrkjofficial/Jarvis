/** @type {import('next').NextConfig} */

const cspHeader = `
	base-uri 'self';
	block-all-mixed-content;
	connect-src 'self' blob: data:;
	default-src 'self' blob: data:;
	font-src 'self' https://fonts.gstatic.com;
	form-action 'self';
	frame-ancestors 'self' blob: data:;
	frame-src 'self' blob: data:;
	img-src 'self' blob: data:;
	object-src 'self' blob: data:;
	script-src 'self' 'unsafe-inline' http: https: 'unsafe-eval';
	style-src 'self' 'unsafe-inline';
	upgrade-insecure-requests;
`;

const nextConfig = {
	images: {
		remotePatterns: [{ hostname: "flagcdn.com", pathname: "**", protocol: "https" }],
	},
	optimizeFonts: true,
	reactStrictMode: true,
	async headers() {
		return [
			{
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: process.env.NEXT_PUBLIC_URL },
					{ key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
					{ key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
				],
			},
			{
				source: "/(.*)",
				headers: [
					{
						key: "Content-Security-Policy",
						value: cspHeader.replace(/\n/g, ""),
					},
				],
			},
			{
				source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
				headers: [
					{ key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=()" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "DENY" },
					{ key: "X-XSS-Protection", value: "1; mode=block" },
					{ key: "X-Permitted-Cross-Domain-Policies", value: "none" },
					{ key: "Cache-Control", value: "no-store, max-age=0, no-cache" },
					{ key: "Cross-Origin-Opener-Policy", value: "same-origin" },
					// { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
					// { key: "Clear-Site-Data", value: '"cache", "cookies", "executionContexts", "storage"' },
				],
			},
		];
	},
	async redirects() {
		return [
			{
				source: '/robots.txt',
				destination: '/404',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
